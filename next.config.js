const withSvgr = require('next-plugin-svgr');


// module.exports = {
//     webpack: function (config, options) {
//         console.log(options.webpack); // 4.44.1
//             options.webpack.node={ "fs": "empty" }
//         return config;
//       },
//   }
// module.exports = withSvgr();


module.exports = withSvgr({
  webpack: function (config, options) {
    //console.log(options.webpack); // 4.44.1
    options.webpack.node = { "fs": "empty" }
    return config;
  },
  swcMinify:false,
  images: {
    domains: ['strapi.adamkarski.art'],
  },
  distDir: "build",

  async headers() {
    return [
      {
        // matching all API routes
        source: "/realizacje/[slug]",
        headers: [
           { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http//strapi.adamkarski.art" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
});
