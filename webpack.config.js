var path = require("path");

var webpack = require("webpack");

var reactNativeExternalsPromise = (function() {
  var reactNativeRoot = path.dirname(require.resolve("react-native/package"));
  var blacklist = require("react-native/packager/blacklist");
  var ReactPackager = require("react-native/packager/react-packager");
  var reactNativePackage = require("react-native/package");

  return ReactPackager.getDependencies(
    {
      assetRoots: [reactNativeRoot],
      blacklistRE: blacklist(false),
      projectRoots: [reactNativeRoot],
      transformModulePath: require.resolve("react-native/packager/transformer")
    },
    reactNativePackage.main
  )
    .then(function(dependencies) {
      return dependencies.filter(function(dependency) {
        return !dependency.isPolyfill;
      });
    })
    .then(function(dependencies) {
      return dependencies.map(function(dependency) {
        return dependency.id;
      });
    });
})();

module.exports = {
  debug: true,
  entry: {
    "index.js": path.join(__dirname, "src/index.js")
  },
  externals: [
    function(context, request, cb) {
      reactNativeExternalsPromise.then(function(reactNativeExternals) {
        if (
          ["react-native"].concat(reactNativeExternals).indexOf(request) != -1
        ) {
          cb(null, request);
        } else {
          cb();
        }
      });
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel?blacklist[]=react",
        exclude: /node_modules\//
      },
      { test: /\.jsx$/, loader: "imports?React=react-native!babel" }
    ]
  },
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs"
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true
    })
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "./dist/bundle.js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  }

  // Other options...
};
