import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
export function buildPlugins({ mode, paths, platform }) {
  const isProd = mode === 'production'
  const isDev = mode === 'development'

  const plugins = [
    new HtmlWebpackPlugin({
      // для чтения html, подключает js к html
      template: paths.html,
      // для подключения favicon
      favicon: paths.favicon
    }),
    // подменяет глобальные переменные на значения сборки
    new webpack.DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __ENV__: JSON.stringify(mode)
    })
  ]

  if (isProd) {
    // выделяет стили из общего js в отдельные файлы
    plugins.push(new MiniCssExtractPlugin({
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
    // выносит проверку типов в отдельный процесс, ускоряя сборку
    plugins.push(new ForkTsCheckerWebpackPlugin())
  }

  if(isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  return plugins
}
