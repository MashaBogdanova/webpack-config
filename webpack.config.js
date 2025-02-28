import path from "path";
import {fileURLToPath} from "url";
import {buildPlugins} from "./config/build/buildPlugins.js";
import {buildLoaders} from "./config/build/buildLoaders.js";
import {buildResolvers} from "./config/build/buildResolvers.js";
import {buildDevServer} from "./config/build/buildDevServer.js";

export default (env) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const isDev = env.mode === 'development'


  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'src', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    favicon: path.resolve(__dirname, 'public', 'favicon.ico')
  }

  const options = {
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    platform: env.platform ?? 'desktop'
  }

  return {
    mode: env.mode ?? 'development',
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : false, // для поиска ошибок в бандле
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}

