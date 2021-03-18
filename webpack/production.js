const { merge } = require('webpack-merge');
const parts = require('./parts');

module.exports = (options) => merge(
    parts.typecheck({
        async: true,
    }),
    parts.minifyJavaScript(),
    parts.minifyCSS({ options: { preset: ['default'] } }),
    parts.compressFiles({
        algorithm: 'gzip',
        test: /\.(js|css)$/,
        threshold: 8192,
    }),

    parts.splitChunks({ chunks: 'all' }),
);
