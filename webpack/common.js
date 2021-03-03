const { merge } = require('webpack-merge');
const path = require('path');
const parts = require('./parts');

const getCommon = ({ outputPath, sourcePath, entries }) => (merge(

    // Use some html we have written
    parts.loadHTML({ template: './src/index.html' }),

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

    // Where to start looking for things to bundle
    { entry: ['./src'] },
));

module.exports = {
    getCommon,
};
