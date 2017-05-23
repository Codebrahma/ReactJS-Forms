'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Combine all reducers in this file and export the combined reducers.
                                                                                                                                                                                                                                                                   * If we were to do this in store.js, reducers wouldn't be hot reloadable.
                                                                                                                                                                                                                                                                   */

exports.default = createReducer;

var _reduxImmutable = require('redux-immutable');

var _immutable = require('immutable');

var _reactRouterRedux = require('react-router-redux');

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
var routeInitialState = (0, _immutable.fromJS)({
  locationBeforeTransitions: null
});

/**
 * Merge route into the global application state
 */
function routeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : routeInitialState;
  var action = arguments[1];

  switch (action.type) {
    /* istanbul ignore next */
    case _reactRouterRedux.LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
function createReducer(asyncReducers) {
  return (0, _reduxImmutable.combineReducers)(_extends({
    route: routeReducer
  }, asyncReducers));
}
module.exports = exports['default'];
//# sourceMappingURL=reducers.js.map