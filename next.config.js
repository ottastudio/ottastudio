const withPlugins = require("next-compose-plugins");
const dotenvLoad = require("dotenv-load");
const fonts = require("next-fonts");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

dotenvLoad();

const nextConfig = {};
module.exports = withPlugins([[fonts], [withBundleAnalyzer]], nextConfig);
