require("dotenv").config();
const axios = require("axios");

const i18nQuery = {
  query: `
        {
            text {
                key
                text_fi
                text_en
                text_sv
            }
        }
    `,
};

const getI18n = () =>
  axios.post(process.env.CMS_URL, i18nQuery).then((res) =>
    res.data.data.text.reduce(
      (i18n, { key, text_fi, text_en, text_sv }) => ({
        ...i18n,
        [key]: { fi: text_fi, sv: text_sv, en: text_en },
      }),
      {}
    )
  );

getI18n().then((data) => console.log(JSON.stringify(data, null, 2)));
