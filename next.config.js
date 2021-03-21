const path = require('path');

module.exports = {
  env: {
    BASE_URL: "https://idb-api.herokuapp.com"/* "http://localhost:1337" */,
    PATH: { MAIN: "/news-data" },
  },
  images: {
    domains: ["idb-api.herokuapp.com"/* "localhost" */],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
