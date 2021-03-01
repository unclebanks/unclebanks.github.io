import { mode } from 'webpack-nano/argv';
import { MiniHtmlWebpackPlugin } from 'mini-html-webpack-plugin';
import { WebpackPluginServe } from 'webpack-plugin-serve'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const config = {
  watch: mode === 'development',
  entry: ['./src', 'webpack-plugin-serve/client'],
  mode,
  plugins: [
    new MiniHtmlWebpackPlugin(),
    new WebpackPluginServe({
      port: process.env.NNPG_PORT || 3000,
      static: './dist',
      liveReload: true,
      waitForBuild: true,
    })
  ],
};
