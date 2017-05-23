'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _immutable = require('immutable');

var _reactRouterRedux = require('react-router-redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create the store with asynchronously loaded reducers
 */

var devtools = window.devToolsExtension || function () {
  return function (noop) {
    return noop;
  };
};

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var history = arguments[1];

  // Create the store with middlewares
  // 1. routerMiddleware: Syncs the location/URL path to the state
  var middlewares = [(0, _reactRouterRedux.routerMiddleware)(history)];

  var enhancers = [_redux.applyMiddleware.apply(undefined, middlewares), devtools()];

  var store = (0, _redux.createStore)((0, _reducers2.default)(), (0, _immutable.fromJS)(initialState), _redux.compose.apply(undefined, enhancers));

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    System.import('./reducers').then(function (reducerModule) {
      var createReducers = reducerModule.default;
      var nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(nextReducers);
    });
  }

  // Initialize it with no other reducers
  store.asyncReducers = {};
  return store;
}
module.exports = exports['default'];
//# sourceMappingURL=store.js.map