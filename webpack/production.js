const { merge } = require('webpack-merge');
const { generateSourceMap } = require('./parts');

module.exports = (options) => merge(
    generateSourceMap({ tool: 'source-map' }),
);
