'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactRouterScroll = require('react-router-scroll');

var _reactRouterScroll2 = _interopRequireDefault(_reactRouterScroll);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _reactRouterRedux = require('react-router-redux');

var _reactRedux = require('react-redux');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

require('./styles/main.scss');

var _selectors = require('./selectors');

var _main = require('./modules/Core/components/main');

var _main2 = _interopRequireDefault(_main);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _runtime = require('offline-plugin/runtime');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Loading normalize css to reset default and normalize CSS properties in different browsers
 */
/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
require('normalize-css');

/**
 * Needed for onTouchTap
 * http:stackoverflow.com/a/34015469/988941
 */

/**
 * Import Main scss file, for global styles
 */


/**
 *
 * TODO: Use manifest, htaccess for dll building
 * Import all the third party stuff
 */
(0, _reactTapEventPlugin2.default)();

/**
 * Create redux store with history
 * this uses the singleton browserHistory provided by react-router
 * Optionally, this could be changed to leverage a created history
 * e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
 */
var initialState = {};
var store = (0, _store2.default)(initialState, _reactRouter.browserHistory);

/**
 * Sync history and store, as the react-router-redux reducer
 * is under the non-default key ("routing"), selectLocationState
 * must be provided for resolving how to retrieve the "route" in the state
 *
 */

var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store, {
  selectLocationState: (0, _selectors.selectLocationState)()
});
/**
 * Set up the router, wrapping all Routes in the App component
 */

var rootRoute = {
  component: _main2.default,
  childRoutes: (0, _routes2.default)()
};

var render = function render() {
  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_reactRouter.Router, {
      history: history,
      routes: rootRoute,
      render:

      //  Scroll to top when going to a new page, imitating default browser
      //  behaviour
      (0, _reactRouter.applyRouterMiddleware)((0, _reactRouterScroll2.default)())
    })
  ), document.getElementById('app'));
};

render();

/**
 * accept hot reload only if there is support
 */
if (module.hot) {
  /**
   * modules.hot.accept does not accept dynamic dependencies,
   * have to be constants at compile-time
   */
  module.hot.accept();
}

/**
 * Install ServiceWorker and AppCache in the end since
 * it's not most important operation and if main code fails,
 * we do not want it installed
 */

(0, _runtime.install)();
//# sourceMappingURL=app.js.map