const Bundler = require("parcel-bundler");
const packageVersionPlugin = require("../index");
const path = require("path");
const fs = require("fs");

it("should put package version in the output", async () => {
  const bundler = new Bundler(path.join(__dirname, "./file.js"), {
    outDir: path.join(__dirname, "dist"),
    production: true,
    cache: false,
    watch: false,
    sourceMaps: false,
  });
  packageVersionPlugin(bundler);

  const bundle = await bundler.bundle();
  const outputContent = fs.readFileSync(bundle.name, { encoding: "utf8" });
  const packageJson = require("../package.json");

  expect(outputContent).toMatch(
    new RegExp(`console\\.log\\("${packageJson.version}"\\)`)
  );
});
