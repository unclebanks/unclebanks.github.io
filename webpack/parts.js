const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { webpack, DefinePlugin } = require('webpack');
const WebpackBar = require('webpackbar');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');

const postcssLoader = (options) => ({
    loader: 'postcss-loader',
});

const cssLoader = () => ({
    loader: 'css-loader',
    options: {
        url: false,
    },
});

exports.loadSCSS = () => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    cssLoader(),
                    postcssLoader(),
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

exports.loadTypescript = () => ({
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheCompression: false,
                    cacheDirectory: true,
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
    },
});

exports.typecheck = (options) => ({
    plugins: [
        new ForkTsCheckerWebpackPlugin(options),
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

exports.serve = (options) => ({
    // entry point for the live reloading
    entry: ['webpack-plugin-serve/client'],

    plugins: [
        // Live reloading of the page on code change
        new WebpackPluginServe(options),
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

exports.generateSourceMap = ({ type }) => ({ devtool: type });

exports.splitChunks = (options) => ({
    optimization: {
        splitChunks: options,
    },
});

exports.minifyCSS = ({ options }) => ({
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({ minimizerOptions: options }),
        ],
    },
});

exports.nameOutput = ({ path, filename }) => ({
    output: {
        path,
        filename,
    },
});

exports.minifyJavaScript = () => ({
    optimization: { minimizer: [new TerserPlugin()] },
});

exports.compressFiles = (options) => ({
    plugins: [
        new CompressionWebpackPlugin(options),
    ],
});

exports.setFreeVariable = (key, value) => ({
    plugins: [
        new DefinePlugin({
            [key]: JSON.stringify(value),
        }),
    ],
});

exports.useWebpackBar = (options) => ({
    plugins: [
        new WebpackBar(options),
    ],
});

exports.generateFavicon = (options) => ({
    plugins: [
        new FaviconsWebpackPlugin(options),
    ],
});

exports.lint = (options = {}) => ({
    plugins: [
        new ESLintPlugin(merge(
            { extensions: ['js', 'ts', 'vue'] },
            options,
        )),
    ],
});

exports.lintCache = (cacheRoot) => ({
    cache: true,
    cacheLocation: path.resolve(
        cacheRoot,
        '.eslintcache',
    ),
});

exports.cache = (options = { type: 'filesystem' }) => ({
    cache: options,
});
