const { merge } = require('webpack-merge');
const { generateSourceMap, splitChunks } = require('./parts');

module.exports = (options) => merge(
    generateSourceMap({ tool: 'source-map' }),
    splitChunks({ chunks: 'all' }),
);
