export default class Routes {
  static load(currentRoute, pageProps) {
    switch (currentRoute) {
      case 'editorial':
        import(
          /*webpackChunkName: 'Editorial' */ '../scripts/controllers/pages/Editorial'
        ).then(module => module.default.init(pageProps))
        break
      case 'privacy':
        import(
          /*webpackChunkName: 'Editorial' */ '../scripts/controllers/pages/Privacy'
        ).then(module => module.default.init(pageProps))
        break
      default:
        import(
          /*webpackChunkName: 'Home' */ '../scripts/controllers/pages/Home'
        ).then(module => module.default.init(pageProps))
    }
  }
}
