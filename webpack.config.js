/* This config file is only for transpiling the Express server file.
* You need webpack-node-externals to transpile an express file
* but if you use it on your regular React bundle, then all the
* node modules your app needs to function get stripped out.
*
* Note: that prod and dev mode are set in npm scripts.
*/
const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const JavaScriptObfuscator = require("webpack-obfuscator");

module.exports = (env, argv) => {
  const SERVER_PATH = "./src/bin/start-webapp.js";
  let plugins = [];

  if (argv.mode !== "production") {
    // plugins.push(new StartServerPlugin({
    //   name: "server.development.js",
    //   // nodeArgs: ["--inspect"], // allow debugging
    //   args: [], // pass args to script
    //   signal: false, // signal to send for HMR (defaults to `false`, uses "SIGUSR2" if `true`)
    //   keyboard: true, // Allow typing "rs" to restart the server. default: only if NODE_ENV is "development"
    // }));
  }
  if (argv.mode === "production") {
    plugins.push(new JavaScriptObfuscator({
      compact: true,
      controlFlowFlattening: true,
      disableConsoleOutput: true,
      renameGlobals: true,
      rotateUnicodeArray: true,
      stringArray: true,
      stringArrayEncoding: "rc4",
    }, []));
  }

  return ({
    entry: {
      server: [SERVER_PATH],
    },
    output: {
      path: path.join(__dirname, "backend"),
      publicPath: "/",
      filename: "[name]." + argv.mode + ".js",
    },
    mode: argv.mode,
    target: "node",
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,   // if you don"t put this is, __dirname
      __filename: false,  // and __filename return blank or /
    },
    resolve: {
      modules: [
        path.resolve("./src"),
      ],
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
      rules: [
        {
          // Transpiles ES6-8 into ES5
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre"
        },
      ],
    },
    devtool: "eval-cheap-module-source-map",
    plugins: plugins,
  });
};

// Webpack 4 basic tutorial:
// https://www.valentinog.com/blog/webpack-4-tutorial/#webpack_4_production_and_development_mode

// Development mode is optimized for build speed and does nothing more than providing an un-minified bundle.
// Production mode enables all sorts of optimizations like minification, scope hoisting, tree-shaking and more.
