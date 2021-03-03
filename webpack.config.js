const path = require('path');
const { merge } = require('webpack-merge');
const { mode, folder } = require('webpack-nano/argv');
const { getCommon } = require('./webpack/common');

const outputPath = path.resolve(__dirname, folder || 'dist');
const sourcePath = path.resolve(__dirname, 'src');
const options = {
    outputPath,
    sourcePath,
};
const getModeConfig = mode === 'development'
    ? require('./webpack/development')
    : require('./webpack/production');

const commonConfig = getCommon(options);
const modeConfig = getModeConfig(options);

module.exports = merge(commonConfig, modeConfig, { mode });
