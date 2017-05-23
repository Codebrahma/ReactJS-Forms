'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function Textarea(props) {
  var className = props.className,
      title = props.title,
      name = props.name,
      getValue = props.getValue,
      setValue = props.setValue,
      getErrorMessage = props.getErrorMessage;

  var errorMessage = getErrorMessage();
  var wrapperClassName = 'input-group ' + className + (errorMessage ? ' invalid' : '');

  return _react2.default.createElement(
    'div',
    { className: wrapperClassName },
    title && _react2.default.createElement(
      'label',
      { htmlFor: name },
      title
    ),
    _react2.default.createElement('textarea', {
      name: name,
      type: 'text',
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
};

Textarea.propTypes = {
  name: _react.PropTypes.string.isRequired,
  getValue: _react.PropTypes.func.isRequired,
  setValue: _react.PropTypes.func.isRequired,
  getErrorMessage: _react.PropTypes.func.isRequired,
  className: _react.PropTypes.string,
  title: _react.PropTypes.string
};

Textarea.defaultProps = {
  className: '',
  title: ''
};

exports.default = Textarea;
module.exports = exports['default'];
//# sourceMappingURL=textarea.js.map