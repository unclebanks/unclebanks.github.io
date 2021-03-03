const { WebpackPluginServe } = require('webpack-plugin-serve');

module.exports = ({ outputPath }) => ({
    // watch files for changes and recompile
    watch: true,

    // entry point for the live reloading
    entry: ['webpack-plugin-serve/client'],

    plugins: [
        // Live reloading of the page on code change
        new WebpackPluginServe({
            host: 'localhost',
            port: process.env.NNPG_PORT || 3000,
            static: outputPath,
            liveReload: true,
            waitForBuild: true,
            open: true,
        }),
    ],
});
