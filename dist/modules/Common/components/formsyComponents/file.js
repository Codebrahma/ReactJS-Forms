'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var File = function File(props) {
  var className = props.className,
      title = props.title,
      name = props.name,
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
    _react2.default.createElement('input', {
      name: name,
      type: 'file'
    }),
    errorMessage && _react2.default.createElement(
      'span',
      { className: 'validation-error' },
      errorMessage
    )
  );
};

File.propTypes = {
  className: _react.PropTypes.string,
  title: _react.PropTypes.string,
  name: _react.PropTypes.string.isRequired,
  getErrorMessage: _react.PropTypes.func.isRequired
};

File.defaultProps = {
  className: '',
  title: ''
};

exports.default = File;
module.exports = exports['default'];
//# sourceMappingURL=file.js.map