'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButton = function RadioButton(props) {
	var className = props.className,
	    name = props.name,
	    title = props.title,
	    value = props.value,
	    checked = props.checked;


	return _react2.default.createElement(
		'div',
		{ className: className },
		_react2.default.createElement('input', {
			type: 'radio',
			name: name,
			value: value,
			defaultChecked: checked
		}),
		title
	);
};

RadioButton.propTypes = {
	className: _react.PropTypes.string,
	name: _react.PropTypes.string.isRequired,
	title: _react.PropTypes.string.isRequired,
	value: _react.PropTypes.string.isRequired,
	checked: _react.PropTypes.bool
};

RadioButton.defaultProps = {
	className: '',
	checked: false
};

exports.default = RadioButton;
module.exports = exports['default'];
//# sourceMappingURL=radioButton.js.map