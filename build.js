const esbuild = require("esbuild");
const path = require("path");
const { sassPlugin, postcssModules } = require("esbuild-sass-plugin");

const isProd = process.env.NODE_ENV === "production";

const options = {
  entryPoints: [path.resolve(__dirname, "src/index.tsx")],
  minify: isProd,
  sourcemap: !isProd,
  bundle: true,
  target: "es2016",
  platform: "browser",
  format: "esm",
  outdir: path.resolve(__dirname, "public"),
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
  watch:
    process.argv[2] === "watch"
      ? {
          onRebuild: (error) => {
            if (error) {
              console.error(error);
            }
          },
        }
      : undefined,
  plugins: [
    sassPlugin({
      transform: postcssModules({
        localsConvention: "camelCaseOnly",
      }),
    }),
  ],
};

esbuild.build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
