'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmitButton = function SubmitButton(props) {
	var className = props.className,
	    name = props.name,
	    value = props.value,
	    disabled = props.disabled,
	    handleOnClick = props.handleOnClick;


	return _react2.default.createElement(
		'div',
		{ className: className },
		_react2.default.createElement('input', {
			type: 'submit',
			name: name,
			value: value,
			disabled: disabled,
			onClick: handleOnClick
		})
	);
};

SubmitButton.propTypes = {
	className: _react.PropTypes.string,
	name: _react.PropTypes.string.isRequired,
	value: _react.PropTypes.string,
	disabled: _react.PropTypes.bool.isRequired,
	handleOnClick: _react.PropTypes.func
};

SubmitButton.defaultProps = {
	className: '',
	disabled: false,
	value: 'submit'
};

exports.default = SubmitButton;
module.exports = exports['default'];
//# sourceMappingURL=submitButton.js.map