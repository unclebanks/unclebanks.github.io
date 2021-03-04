const { merge } = require('webpack-merge');
const { serve, generateSourceMap } = require('./parts');

module.exports = ({ outputPath }) => merge(
    generateSourceMap({ tool: 'inline-module-source-map' }),

    serve({
        host: 'localhost',
        port: process.env.NNPG_PORT || 3000,
        static: outputPath,
        liveReload: true,
        waitForBuild: true,
        open: true,
    }),

    {
        // watch files for changes and recompile
        watch: true,
    },
);
