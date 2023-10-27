const EleventyFetch = require("@11ty/eleventy-fetch");

const transformTranslations = (res) =>
  res.data.reduce(
    ({ fi, en, sv }, { key, text_fi, text_en, text_sv }) => ({
      fi: {
        ...fi,
        [key]: text_fi,
      },
      en: {
        ...en,
        [key]: text_en,
      },
      sv: {
        ...sv,
        [key]: text_sv,
      },
    }),
    {}
  );

module.exports = async function () {
  return EleventyFetch(process.env.CMS_URL + "/items/text", {
    duration: "1h",
    type: "json",
  })
    .then((res) => transformTranslations(res))
    .then((translations) => ({
      t: (data) => {
        return translations[data.locale.lang];
      },
    }));
};
