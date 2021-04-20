const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = function(_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;
  const TerserWebpackPlugin = require("terser-webpack-plugin");
  const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

  return {
    target:'web',
    devtool: isDevelopment && "inline-source-map",
    entry: "./src/index.js",
    output: {
        filename: "assets/js/[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                      loader: "babel-loader",
                    }
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
            ]  
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },
        devServer: {
            compress: true,
            historyApiFallback: true,
            port: 3000,
            open: true,
            hot: true,
            overlay: true,
            contentBase: './dist'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "./src/index.html"
            }),
            isProduction &&
            new MiniCssExtractPlugin({
                filename: "assets/css/[name].[contenthash:8].css",
                chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
            }),
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(
                    isProduction ? "production" : "development"
                    )
            }),
            new webpack.ProvidePlugin({
                "React": "react",
              }),
            new webpack.HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin()
        ].filter(Boolean),
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                          comparisons: false
                        },
                        mangle: {
                            safari10: true
                        },
                        output: {
                          comments: false,
                          ascii_only: true
                        },
                        warnings: false
                        }
                    }),
                    new OptimizeCssAssetsPlugin()
                ],
                runtimeChunk: "single"
        },
       
    };
};