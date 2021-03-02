const { mode, folder } = require('webpack-nano/argv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const outputPath = path.resolve(__dirname, folder || 'dist');

module.exports = {
    // watch files for changes if we are in dev mode
    watch: mode === 'development',

    // Get the index.js file and collect all of the js it imports
    entry: ['./src', 'webpack-plugin-serve/client'],

    // Remove old files before generating more
    output: { clean: true, path: outputPath },
    mode,

    // Custom handling for certain file types
    module: {
        rules: [
            // Loaders to handle css files
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
    },

    // Extra behaviour
    plugins: [
        // Use some html we have written
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

        // Copy everything in ./src/resources into the output folder
        new CopyPlugin({
            patterns: [
                path.resolve(__dirname, 'src', 'resources'),
            ],
        }),

        // Live reloading of the page on code change
        new WebpackPluginServe({
            host: 'localhost',
            port: process.env.NNPG_PORT || 3000,
            static: outputPath,
            liveReload: true,
            waitForBuild: true,
            open: true,
        }),
    ],
};
