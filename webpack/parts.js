const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

exports.loadSCSS = () => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/index.css',
        }),
    ],
});

exports.loadHTML = (options) => ({
    plugins: [
        new HtmlWebpackPlugin(options),
    ],
});

exports.copyFiles = (options) => ({
    plugins: [
        new CopyPlugin(options),
    ],
});

exports.cleanBuild = (outputPath) => ({
    output: { clean: true, path: outputPath },
});

exports.loadVue = () => ({
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
});
