const path = require("path");

module.exports = () => {
  const packagePath = path.join(process.cwd(), "package.json");
  const packageJson = require(packagePath);
  process.env.PACKAGE_VERSION = packageJson.version;
};
