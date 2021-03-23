const path = require("path");

module.exports = {
  env: {
    BASE_URL: /* "https://idb-api.herokuapp.com" */ "http://localhost:1337",
    PATH: {
      NEWS: "/news-data",
      BANNER: "/banner-data",
      EVENTS: "/events",
      SOCIAL_MEDIA: "/social-medias",
      CONTACT_US: "/contact-uses",
      NEWSLETTER: "/newsletters"
    },
  },
  images: {
    domains: [/* "idb-api.herokuapp.com" */ "localhost"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
