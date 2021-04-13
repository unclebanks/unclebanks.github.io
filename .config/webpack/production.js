const { merge } = require('webpack-merge');
const parts = require('./parts');

module.exports = ({ nodeCachePath }) => merge(
    parts.typecheck({
        async: true,
    }),
    parts.lint(parts.lintCache(nodeCachePath)),
    parts.minifyJavaScript(),
    parts.minifyCSS({ options: { preset: ['default'] } }),
    parts.compressFiles({
        algorithm: 'gzip',
        test: /\.(js|css)$/,
        threshold: 8192,
    }),

    parts.splitChunks({ chunks: 'all' }),
);
