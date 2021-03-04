const { merge } = require('webpack-merge');
const parts = require('./parts');

module.exports = (options) => merge(
    parts.minifyJavaScript(),
    parts.minifyCSS({ options: { preset: ['default'] } }),

    parts.generateSourceMap({ tool: 'source-map' }),
    parts.splitChunks({ chunks: 'all' }),
);
