const path = require("path");
const csvParser = require("./csvParser");
const sitetraffic = require("./sitetraffic");
const Builtwith = require("../models/Builtwith");

const importCsvFile = async (filepath, list) => {
  const results = await csvParser.parseBuiltWith(filepath);
  console.log(`Processed ${results.length} from Builtwith CSV`);

  if (!list) throw new Error("list is required");
  // console.log(results);

  let dups = 0;

  for (const res of results) {
    const exists = await Builtwith.exists({ domain: res.domain });

    if (exists) {
      dups++;
    } else {
      console.log(res);
      const record = new Builtwith({ ...res, list });
      await record.save();
    }
  }

  console.log(
    `Created ${results.length} builtwiths, skipped ${dups} duplicates`
  );
  return results;
};

// Not using for the moment (shopify list)
const validateWithAPI = (listname) => {
  const filter = { validation: "Pending" };
  if (listname) filter.list = listname;

  // Get builtwiths to validate
  const builtwiths = Builtwith.find(filter);

  console.log(filter);
};

const obtainTrafficInfo = async (listname, refresh = false) => {
  const filter = {
    validation: { $in: ["Ecomm", "Pending"] },
    techSpends: { $gt: 0 },
  };

  if (listname) filter.list = listname;
  if (!refresh) filter.sitetraffic = { $exists: false };

  // Get builtwiths to validate
  const builtwiths = await Builtwith.find(filter);

  let current = 0;

  for (const record of builtwiths) {
    const result = (await sitetraffic(record.domain)).data;
    if (result && result.estimations) {
      record.sitetraffic = result;
      record.monthlyUsers = result.estimations.visitors.monthly.replace(
        /\,/g,
        ""
      );
      record.monthlyVisits = result.estimations.pageviews.monthly.replace(
        /\,/g,
        ""
      );

      await record.save();
      console.log(
        `obtained ${record.domain} ${current} of ${builtwiths.length}`
      );
    }
    current++;
  }
};

const getFindOnLinkedin = (listname) => {};

const createMany = async (builtwiths) => {
  const res = await Builtwith.create(builtwiths);
};

module.exports = {
  createMany,
  importCsvFile,
  validateWithAPI,
  obtainTrafficInfo,
  getFindOnLinkedin,
};
