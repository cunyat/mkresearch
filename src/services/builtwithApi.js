const axios = require("axios");
const rateLimit = require("axios-rate-limit");

const bwithApi = rateLimit(
  axios.create({
    baseURL: `https://api.builtwith.com/v14/api.json`,
    method: "get",
  }),
  { maxRPS: 5 }
);

const BuiltwithApiService = (domain) => {
  return bwithApi
    .get(`/?KEY=${process.env.BWITH_API_KEY}&LOOKUP=${domain}&LIVEONLY=yes`)
    .then((res) => res.data)
    .then(parseBwithData)
    .catch((err) =>
      console.error(`Error on fetch Builtwith api\n${err}`.bgRed)
    );
};

const parseBwithData = (data) => {
  const out = {};

  if (!data.Results.length) {
    return out;
  }
  let result = data.Results[0].Result;

  out.techSpends = result.Spend;

  let techs = [];
  result.Paths.forEach((p) => p.Technologies.forEach((t) => techs.push(t)));
  out.shopTechs = techs
    .filter((tech) => tech.Tag == "shop")
    .map((tech) => tech.Name);

  return out;
};

module.exports = BuiltwithApiService;
