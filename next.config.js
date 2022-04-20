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
    domains: ['strapi.stream404.art.pl'],
  },
});
