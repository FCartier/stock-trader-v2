const path = require('path'),
 HtmlWebPackPlugin = require("html-webpack-plugin"),
 MiniCssExtractPlugin = require("mini-css-extract-plugin"),
 CleanWebpackPlugin = require('clean-webpack-plugin'),
 webpack = require('webpack');


module.exports = {
    entry: ["babel-polyfill", './src/index.tsx'],
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: "babel-loader"},
            { test: /\.(ts|tsx)$/, use: 'ts-loader' },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.jsx', '.json']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
  };

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map';
        config.plugins = [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebPackPlugin({
                template: "./src/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new webpack.HotModuleReplacementPlugin()
        ];
        config.devServer = {
            contentBase: './dist',
            hot: true
        }
      }
    
      if (argv.mode === 'production') {
        config.mode = 'production';
        config.devtool = 'source-map';
        config.plugins = [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebPackPlugin({
                template: "./src/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ]
      }

    return config;
};