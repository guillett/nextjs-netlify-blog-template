const isProduction = "production" === process.env.NODE_ENV;

module.exports = ({
  basePath: isProduction ? "/nextjs-netlify-blog-template" : "",
  output: "export",
  pageExtensions: ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
});
