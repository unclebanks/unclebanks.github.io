const { merge } = require('webpack-merge');
const { mode } = require('webpack-nano/argv');
const path = require('path');
const parts = require('./parts');

const getCommon = ({ outputPath, sourcePath, entries }) => (merge(
    // more descriptive output names
    parts.nameOutput({
        path: outputPath,
        filename: '[name].[contenthash].js',
    }),

    // Use some html we have written
    parts.loadHTML({ template: './src/index.html' }),

    parts.loadTypescript(),

    // Tell webpack how to load vue files
    parts.loadVue(),

    // Tell webpack how to load scss files
    parts.loadSCSS(),

    // Copy everything in ./src/resources into the output folder
    parts.copyFiles({
        patterns: [
            path.resolve(sourcePath, 'resources'),
        ],
    }),

    // Remove old files before generating more
    parts.cleanBuild(outputPath),

    parts.setFreeVariable('NODE_ENV', mode),

    parts.useWebpackBar(),

    // documentation at https://www.npmjs.com/package/favicons-webpack-plugin
    parts.generateFavicon({
        logo: './src/assets/favicon_base.png',
        favicons: {
            icons: {
                android: false,
                appleIcon: false,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: false,
                windows: false,
                yandex: false,
            },
        },
    }),

    parts.cache(),

    // Where to start looking for things to bundle
    { entry: ['./src'] },
));

module.exports = {
    getCommon,
};
