const axios = require("axios");

const CMS_URL = "https://cms-xeluiu6oba-lz.a.run.app/items/";

const getCollection = (name) =>
  axios
    .get(CMS_URL + name)
    .then((response) => response.data.data)
    .catch((err) =>
      console.error(`Failed to fetch collection ${name}: ${err}`)
    );

module.exports = async function () {
  return {
    news: await getCollection("news"),
    text: await getCollection("text"),
  };
};
