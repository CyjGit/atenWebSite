// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import NearAtenRoute from './NearAten'
import NewsRoute from './news'
import CounterRoute from './Counter'
import SolutionRoute from './Solution'
import ServiceAreaRoute from './ServiceArea'
import MobileApplicationRoute from './MobileAppcalition'
import CustomerCaseRoute from './CustomerCase'
import ContactUsRoute from './ContactUs'
import ZenRoute from './Zen'
import ElapseRoute from './Elapse'
import RouteRoute from './Route'
import PageNotFound from './PageNotFound'
import Redirect from './PageNotFound/redirect'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    NearAtenRoute(store),
    NewsRoute(store),
    SolutionRoute(store),
    ServiceAreaRoute(store),
    SolutionRoute(store),
    MobileApplicationRoute(store),
    CustomerCaseRoute(store),
    ContactUsRoute(store),
    CounterRoute(store),
    ZenRoute(store),
    ElapseRoute(store),
    RouteRoute(store),
    PageNotFound(),
    Redirect
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes