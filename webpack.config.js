const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProductionBuild = argv.mode === "production";
  const publicPath = '';

  const pcss = {
    test: /\.(p|post|)css$/,
    use: [
      isProductionBuild
        ? MiniCssExtractPlugin.loader
        : "style-loader", "css-loader", "postcss-loader"
    ]
  };

  const js = {
    test: /\.js$/,
    loader: "babel-loader",
    exclude: /node_modules/,
  };

  const files = {
    test: /\.(png|jpe?g|gif|woff2|woff|ttf|otf|ico?)$/i,
    loader: "file-loader",
    options: {
      name: "[hash].[ext]"
    }
  };

  const svg = {
    test: /\.svg$/,
    use: [
      {
        loader: "svg-sprite-loader",
        options: {
          extract: true,
          spriteFilename: svgPath => `sprite${svgPath.substr(-4)}`
        }
      },
      "svg-transform-loader",
      {
        loader: "svgo-loader",
        options: {
          plugins: [
            { removeTitle: true },
            {
              removeAttrs: {
                attrs: "(fill|stroke)"
              }
            }
          ]
        }
      }
    ]
  };

  const pug = {
    test: /\.pug$/,
    loader: ["pug-loader"]
  };

  const config = {
    entry: {
      main: "./src/main.js"
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].[hash].build.js",
      publicPath: isProductionBuild ? publicPath : "",
      chunkFilename: "[chunkhash].js"
    },
    module: {
      rules: [pcss, js, files, svg, pug]
    },
    resolve: {
      alias: {
        images: path.resolve(__dirname, "src/images"),
        $: path.resolve('node_modules','jquery/src/jquery'),
        jquery: path.resolve('node_modules','jquery/src/jquery'),
      },
      extensions: ["*", ".js"]
    },
    devServer: {
      noInfo: false,
      overlay: true,
      hot: true,
      host: 'localhost',
      port: 8080,
      historyApiFallback: true,
    },
    performance: {
      hints: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.pug",
        // inject: true,
        chunks: ["main"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/pages/catalog.pug",
        filename: "catalog.html",
        // inject: true,
        // chunks: ["catalog"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/pages/card-product.pug",
        filename: "card-product.html",
        // inject: true,
        // chunks: ["cardProduct"]
      }),
      new SpriteLoaderPlugin({ plainSprite: true }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    devtool: "#eval-source-map"
  };

  if (isProductionBuild) {
    config.devtool = "none";
    config.plugins = (config.plugins || []).concat([
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: '"production"'
        }
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[contenthash].css"
      })
    ]);

    config.optimization = {};

    config.optimization.minimizer = [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ];
  }

  return config;
};