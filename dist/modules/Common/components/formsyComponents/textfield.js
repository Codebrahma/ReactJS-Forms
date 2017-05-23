'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textfield = function (_Component) {
  _inherits(Textfield, _Component);

  function Textfield() {
    _classCallCheck(this, Textfield);

    return _possibleConstructorReturn(this, (Textfield.__proto__ || Object.getPrototypeOf(Textfield)).apply(this, arguments));
  }

  _createClass(Textfield, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          title = _props.title,
          name = _props.name,
          type = _props.type,
          getValue = _props.getValue,
          setValue = _props.setValue,
          getErrorMessage = _props.getErrorMessage,
          isRequired = _props.isRequired;


      var errorMessage = getErrorMessage();
      var wrapperClassName = 'input-group ' + className + (errorMessage ? ' invalid' : '');

      return _react2.default.createElement(
        'div',
        { className: wrapperClassName },
        title && _react2.default.createElement(
          'label',
          { htmlFor: name },
          title,
          _react2.default.createElement(
            'span',
            null,
            isRequired() ? "*" : null
          )
        ),
        _react2.default.createElement('input', {
          name: name,
          type: type,
          value: getValue() || '',
          onChange: function onChange(e) {
            return setValue(e.target.value);
          }
        }),
        errorMessage && _react2.default.createElement(
          'span',
          { className: 'validation-error' },
          errorMessage
        )
      );
    }
  }]);

  return Textfield;
}(_react.Component);

;

Textfield.propTypes = {
  name: _react.PropTypes.string.isRequired,
  getValue: _react.PropTypes.func.isRequired,
  setValue: _react.PropTypes.func.isRequired,
  getErrorMessage: _react.PropTypes.func.isRequired,
  type: _react.PropTypes.string,
  className: _react.PropTypes.string,
  title: _react.PropTypes.string
};

Textfield.defaultProps = {
  type: 'text',
  className: '',
  title: ''
};

exports.default = Textfield;
module.exports = exports['default'];
//# sourceMappingURL=textfield.js.map