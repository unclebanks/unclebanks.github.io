const path = require('path');
const { merge } = require('webpack-merge');
const {
    mode, folder, host, port,
} = require('webpack-nano/argv');
const { getCommon } = require('./.config/webpack/common');

const outputPath = path.resolve(__dirname, folder || 'dist');
const sourcePath = path.resolve(__dirname, 'src');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const nodeCachePath = path.resolve(nodeModulesPath, '.cache');
const configPath = path.resolve(__dirname, '.config');
const options = {
    outputPath,
    sourcePath,
    nodeModulesPath,
    nodeCachePath,
    configPath,
    host,
    port,
};
const getModeConfig = mode === 'development'
    ? require('./.config/webpack/development')
    : require('./.config/webpack/production');

const commonConfig = getCommon(options);
const modeConfig = getModeConfig(options);

module.exports = merge(commonConfig, modeConfig, { mode });
