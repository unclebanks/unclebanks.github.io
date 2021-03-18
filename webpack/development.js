const { merge } = require('webpack-merge');
const { serve, generateSourceMap, typecheck } = require('./parts');

module.exports = ({ outputPath, host = 'localhost', port = 3000 }) => merge(
    generateSourceMap({ tool: 'inline-module-source-map' }),

    typecheck({
        async: true,
        logger: { infrastructure: 'console' },
    }),

    serve({
        host,
        port,
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
