const { merge } = require('webpack-merge');
const parts = require('./parts');

module.exports = ({
    outputPath, nodeCachePath, host = 'localhost', port = 3000,
}) => merge(
    parts.generateSourceMap({ tool: 'inline-module-source-map' }),

    parts.typecheck({
        async: true,
        logger: { infrastructure: 'console' },
    }),
    parts.lint(merge(
        { lintDirtyModulesOnly: true },
        parts.lintCache(nodeCachePath),
    )),

    parts.serve({
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
