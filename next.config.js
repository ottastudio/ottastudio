const withPlugins = require("next-compose-plugins");
const dotenvLoad = require("dotenv-load");
const fonts = require("next-fonts");

dotenvLoad();

const nextConfig = {};
module.exports = withPlugins([[fonts]], nextConfig);
