const axios = require("axios");
const rateLimit = require("axios-rate-limit");

const stapi = rateLimit(
  axios.create({
    baseURL: `https://endpoint.sitetrafficapi.com/pay-as-you-go`,
    method: "get",
  }),
  { maxRPS: 5 }
);

const SitetrafficService = (domain) => {
  return stapi
    .get(`/?key=${process.env.SITETRAFFIC_API_KEY}&host=${domain}`)
    .then((res) => res.data)
    .then(parseSiteTrafficData)
    .catch((err) =>
      console.error(`Error on fetch Site traffic api\n${err}`.bgRed)
    );
};

const parseSiteTrafficData = (data) => {
  const out = {};
  const result = data.data;
  if (result && result.estimations) {
    out.monthlyUsers = result.estimations.visitors.monthly.replace(/\,/g, "");
    out.monthlyVisits = result.estimations.pageviews.monthly.replace(/\,/g, "");
    out.siteWorth = result.estimations.site_worth
      .replace(/\,/g, "")
      .replace("$", "");
  }
};

module.exports = SitetrafficService;
