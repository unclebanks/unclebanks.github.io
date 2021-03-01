const { mode } = require('webpack-nano/argv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
    watch: mode === 'development',
    entry: ['./src', 'webpack-plugin-serve/client'],
    mode,
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CopyPlugin({
            patterns: [
                path.resolve(__dirname, 'src', 'resources'),
            ],
        }),
        new WebpackPluginServe({
            port: process.env.NNPG_PORT || 3000,
            static: './dist',
            liveReload: true,
            waitForBuild: true,
        }),
    ],
};
