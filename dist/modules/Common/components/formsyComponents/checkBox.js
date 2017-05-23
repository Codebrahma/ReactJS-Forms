'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBox = function CheckBox(props) {
	var className = props.className,
	    name = props.name,
	    title = props.title,
	    value = props.value,
	    checked = props.checked;


	return _react2.default.createElement(
		'div',
		{ className: className },
		_react2.default.createElement('input', {
			type: 'checkbox',
			name: name,
			value: value,
			defaultChecked: checked
		}),
		title
	);
};

CheckBox.propTypes = {
	className: _react.PropTypes.string,
	name: _react.PropTypes.string.isRequired,
	title: _react.PropTypes.string.isRequired,
	value: _react.PropTypes.string.isRequired,
	checked: _react.PropTypes.bool
};

CheckBox.defaultProps = {
	className: '',
	checked: false
};

exports.default = CheckBox;
module.exports = exports['default'];
//# sourceMappingURL=checkBox.js.map