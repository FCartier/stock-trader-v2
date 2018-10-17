const path = require('path'),
 HtmlWebPackPlugin = require("html-webpack-plugin"),
 MiniCssExtractPlugin = require("mini-css-extract-plugin"),
 CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", './src/index.tsx', 'webpack-hot-middleware/client'],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {loader: "babel-loader"},
                    {loader: 'ts-loader'}
                ]
            },
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
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};