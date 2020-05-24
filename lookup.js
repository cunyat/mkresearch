const axios = require("axios").default;

const url =
  "https://api.builtwith.com/free1/api.json?KEY=74d19d21-b159-4138-bece-66d2e73f8674&LOOKUP=";
const domain = "gencat.cat";

axios
  .get(url + domain)
  .catch((err) => console.log(err))
  .then((res) => {
    // console.log(res.data);
    if (
      havePayments(res.data.groups) &&
      haveShop(res.data.groups) &&
      haveNotAds(res.data.groups)
    )
      console.log("Ecommerce");
    else console.log("Not ecommerce");
  })
  .catch((err) => {
    console.log("Not found", err);
  });

const havePayments = (group) => {
  return group.filter((i) => i.name === "payment" && i.live > 0).length > 0;
};

const haveShop = (group) => {
  return group.filter((i) => i.name === "shop" && i.live > 0).length > 0;
};

const haveNotAds = (group) => {
  const ads = group.filter((i) => i.name === "ads")[0];
  // console.log(ads);
  return ads ? ads.live + ads.dead < 150 : true;
};
