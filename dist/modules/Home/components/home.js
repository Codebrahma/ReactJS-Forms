'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyFormCreater = require('./formsyFormCreater.js');

var _formsyFormCreater2 = _interopRequireDefault(_formsyFormCreater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.state = {
      errors: {}
    };

    _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
    return _this;
  }

  _createClass(HomePage, [{
    key: 'handleOnSubmit',
    value: function handleOnSubmit() {
      this.setState({ errors: { email: 'Already Taken' } });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Login Form'
        ),
        _react2.default.createElement(_formsyFormCreater2.default, {
          data: [{
            name: 'email',
            title: 'Email',
            type: 'email',
            validation: "isEmail",
            valiadationError: "Enter a valid email",
            required: true
          }, {
            name: 'password',
            title: 'Password',
            type: 'password',
            required: true
          }],
          errors: this.state.errors,
          handleOnSubmit: this.handleOnSubmit,
          submitButtonName: 'submit',
          submitButtonValue: 'Submit'
        })
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

exports.default = HomePage;
module.exports = exports['default'];
//# sourceMappingURL=home.js.map