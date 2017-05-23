'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectLocationState = exports.selectError = exports.selectLoading = exports.selectCurrentUser = exports.selectGlobal = undefined;

var _reselect = require('reselect');

var selectGlobal = function selectGlobal() {
  return function (state) {
    return state.get('global');
  };
}; /**
    * The global state selectors
    */

/**
 * This is optional, feel free to read `reselect` module readme
 */


var selectCurrentUser = function selectCurrentUser() {
  return (0, _reselect.createSelector)(selectGlobal(), function (globalState) {
    return globalState.get('currentUser');
  });
};

var selectLoading = function selectLoading() {
  return (0, _reselect.createSelector)(selectGlobal(), function (globalState) {
    return globalState.get('loading');
  });
};

var selectError = function selectError() {
  return (0, _reselect.createSelector)(selectGlobal(), function (globalState) {
    return globalState.get('error');
  });
};

// selectLocationState expects a plain JS object for the routing state
var selectLocationState = function selectLocationState() {
  var prevRoutingState = void 0;
  var prevRoutingStateJS = void 0;

  return function (state) {
    var routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

exports.selectGlobal = selectGlobal;
exports.selectCurrentUser = selectCurrentUser;
exports.selectLoading = selectLoading;
exports.selectError = selectError;
exports.selectLocationState = selectLocationState;
//# sourceMappingURL=selectors.js.map