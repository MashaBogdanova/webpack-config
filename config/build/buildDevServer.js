export function buildDevServer ({paths, port}) {
  return {
    static: paths.output,
    port,
    open: true,
    // для роутинга через react-router-dom
    // работает только с дев сервером, при деплое надо проксировать на index.html
    historyApiFallback: true,
    // Hot Module Replacement --> React Fast Refresh --> react-refresh-webpack-plugin
    // чтобы подтягивались изменения из кода, но не перезагружалась страница
    // счетчик в app не обнуляется
    hot: true
  }
}
