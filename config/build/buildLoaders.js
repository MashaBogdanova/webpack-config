import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders({mode}) {
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // конфигурация css лоадера для модулей
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          },
        }
      },
      'sass-loader'
    ],
  }

  const assetsLoader = {
    test: /\.(png|jpg|jpeg)$/i,
    type: "asset",
  }

  // создает реакт компонент из svg
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{loader: '@svgr/webpack', options: {icon: true}}],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: [{
      loader: 'ts-loader',
      // ускоряет сборку, не делает проверку типов
      // плагин для вынесения проверки типов в отдельный процесс
      // https://www.npmjs.com/package/fork-ts-checker-webpack-plugin
      options: {
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        }),
        transpileOnly: isProd,
      }
    },
    ],
    exclude: /node_modules/,
  }

  return [scssLoader, tsLoader, assetsLoader, svgLoader]
}
