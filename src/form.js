'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function Form(componentPayload) {
	return function (_Component) {
		_inherits(FormWithSubmitButton, _Component);

		function FormWithSubmitButton(props) {
			_classCallCheck(this, FormWithSubmitButton);

			var _this = _possibleConstructorReturn(this, (FormWithSubmitButton.__proto__ || Object.getPrototypeOf(FormWithSubmitButton)).call(this, props));

			_this.state = {
				canSubmit: false
			};

			_this.enableButton = _this.enableButton.bind(_this);
			_this.disableButton = _this.disableButton.bind(_this);
			_this.generateInputComponents = _this.generateInputComponents.bind(_this);
			return _this;
		}

		_createClass(FormWithSubmitButton, [{
			key: 'generateInputComponents',
			value: function generateInputComponents() {
				var formInputs = _lodash2.default.map(this.props.data, function (input, index) {
					if (input.type === 'submit') return null;
					var component = componentPayload[input.type];
					return _react2.default.createElement(component.type, _extends({ key: index }, input));
				});

				return formInputs;
			}
		}, {
			key: 'enableButton',
			value: function enableButton() {
				this.setState({ canSubmit: true });
			}
		}, {
			key: 'disableButton',
			value: function disableButton() {
				this.setState({ canSubmit: false });
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				if (!_lodash2.default.isEmpty(nextProps.errors)) {
					this.refs.form.updateInputsWithError(nextProps.errors);
				};
			}
		}, {
			key: 'render',
			value: function render() {
				var Submit = componentPayload['submit'];

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_formsyReact2.default.Form,
						{
							ref: 'form',
							onInvalid: this.disableButton,
							onValid: this.enableButton,
							onValidSubmit: this.props.handleOnSubmit
						},
						_react2.default.createElement(
							'div',
							null,
							this.generateInputComponents()
						),
						_react2.default.createElement(Submit.type, {
							name: this.props.submitButtonName,
							value: this.props.submitButtonValue,
							disabled: !this.state.canSubmit
						})
					)
				);
			}
		}]);

		return FormWithSubmitButton;
	}(_react.Component);
};

exports.default = Form;
module.exports = exports['default'];
//# sourceMappingURL=form.js.map