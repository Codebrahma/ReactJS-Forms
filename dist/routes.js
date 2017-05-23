'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = createRoutes;

/**
 * Define Routes here
 */

var errorLoading = function errorLoading(err) {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

var loadModule = function loadModule(cb) {
  return function (componentModule) {
    cb(null, componentModule.default);
  };
};

function createRoutes() {
  return [{
    path: '/home',
    name: 'home',
    getComponent: function getComponent(nextState, cb) {
      var importModules = Promise.all([System.import('./modules/Home/components/home')]);
      var renderRoute = loadModule(cb);
      importModules.then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            component = _ref2[0];

        renderRoute(component);
      });
      importModules.catch(errorLoading);
    }
  }];
}
module.exports = exports['default'];
//# sourceMappingURL=routes.js.map