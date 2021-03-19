const path = require('path');

module.exports = {
  env: {
    BASE_URL: "http://localhost:1337",
    PATH: { MAIN: "/news-data" },
  },
  images: {
    domains: ["localhost"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
