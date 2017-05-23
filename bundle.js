'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactRouterScroll = require('react-router-scroll');

var _reactRouterScroll2 = _interopRequireDefault(_reactRouterScroll);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _reactRouterRedux = require('react-router-redux');

var _reactRedux = require('react-redux');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

require('./styles/main.scss');

var _selectors = require('./selectors');

var _main = require('./modules/Core/components/main');

var _main2 = _interopRequireDefault(_main);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _runtime = require('offline-plugin/runtime');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Loading normalize css to reset default and normalize CSS properties in different browsers
 */
/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
require('normalize-css');

/**
 * Needed for onTouchTap
 * http:stackoverflow.com/a/34015469/988941
 */

/**
 * Import Main scss file, for global styles
 */


/**
 *
 * TODO: Use manifest, htaccess for dll building
 * Import all the third party stuff
 */
(0, _reactTapEventPlugin2.default)();

/**
 * Create redux store with history
 * this uses the singleton browserHistory provided by react-router
 * Optionally, this could be changed to leverage a created history
 * e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
 */
var initialState = {};
var store = (0, _store2.default)(initialState, _reactRouter.browserHistory);

/**
 * Sync history and store, as the react-router-redux reducer
 * is under the non-default key ("routing"), selectLocationState
 * must be provided for resolving how to retrieve the "route" in the state
 *
 */

var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store, {
  selectLocationState: (0, _selectors.selectLocationState)()
});
/**
 * Set up the router, wrapping all Routes in the App component
 */

var rootRoute = {
  component: _main2.default,
  childRoutes: (0, _routes2.default)()
};

var render = function render() {
  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_reactRouter.Router, {
      history: history,
      routes: rootRoute,
      render:

      //  Scroll to top when going to a new page, imitating default browser
      //  behaviour
      (0, _reactRouter.applyRouterMiddleware)((0, _reactRouterScroll2.default)())
    })
  ), document.getElementById('app'));
};

render();

/**
 * accept hot reload only if there is support
 */
if (module.hot) {
  /**
   * modules.hot.accept does not accept dynamic dependencies,
   * have to be constants at compile-time
   */
  module.hot.accept();
}

/**
 * Install ServiceWorker and AppCache in the end since
 * it's not most important operation and if main code fails,
 * we do not want it installed
 */

(0, _runtime.install)();
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formGenerator = require('./modules/Common/formGenerator.js');

var _formGenerator2 = _interopRequireDefault(_formGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _formGenerator2.default;
module.exports = exports['default'];
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

var _index = require('./formsyComponents/index.js');

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
						_react2.default.createElement(_index.SubmitButton, {
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileInput = exports.CheckBox = exports.RadioButton = exports.SubmitButton = exports.Textarea = exports.Textfield = undefined;

var _formsyReact = require('formsy-react');

var _textfield = require('./textfield');

var _textfield2 = _interopRequireDefault(_textfield);

var _textarea = require('./textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _submitButton = require('./submitButton');

var _submitButton2 = _interopRequireDefault(_submitButton);

var _radioButton = require('./radioButton');

var _radioButton2 = _interopRequireDefault(_radioButton);

var _checkBox = require('./checkBox');

var _checkBox2 = _interopRequireDefault(_checkBox);

var _file = require('./file.js');

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable */

/**
 * importing user defined components
 */
var Textfield = (0, _formsyReact.HOC)(_textfield2.default); /**
                                                             * index.js
                                                             *
                                                             * Entry file for UserAuthentication Components,
                                                             * used just to export form components
                                                             * wrapped by formsy-react Higher Order Component
                                                             */

var Textarea = (0, _formsyReact.HOC)(_textarea2.default);
var SubmitButton = (0, _formsyReact.HOC)(_submitButton2.default);
var RadioButton = (0, _formsyReact.HOC)(_radioButton2.default);
var CheckBox = (0, _formsyReact.HOC)(_checkBox2.default);
var FileInput = (0, _formsyReact.HOC)(_file2.default);

/*eslint-enable */

exports.Textfield = Textfield;
exports.Textarea = Textarea;
exports.SubmitButton = SubmitButton;
exports.RadioButton = RadioButton;
exports.CheckBox = CheckBox;
exports.FileInput = FileInput;
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
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _form = require('./components/form.js');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormGenerator = function () {
	function FormGenerator() {
		_classCallCheck(this, FormGenerator);

		this.form = this.form.bind(this);
		this.use = this.use.bind(this);
	}

	_createClass(FormGenerator, [{
		key: 'use',
		value: function use(componentPayload) {
			this.componentPayload = componentPayload;
		}
	}, {
		key: 'form',
		value: function form() {
			return (0, _form2.default)(this.componentPayload);
		}
	}]);

	return FormGenerator;
}();

exports.default = FormGenerator;
module.exports = exports['default'];
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * main.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This component is the skeleton around the actual pages, and should only
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * contain code that should be seen on all pages. (e.g. navigation bar)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          this.props.children
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  children: _react2.default.PropTypes.node
};

exports.default = App;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
								value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formGenerator = require('../../Common/formGenerator.js');

var _formGenerator2 = _interopRequireDefault(_formGenerator);

var _index = require('../../Common/components/formsyComponents/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Example Usage.
//Create a new instance of `FormGenerator` for each time when you are generating a Form.
//Load your custom formsy components using `use` method.
//Generator will use your components to create forms.
//then export by calling `.form` method, which will return a React component
//Import that component where ever you want to generate form and pass your attributes as `data={propAttributes}`.

var LoginForm = new _formGenerator2.default();
LoginForm.use({ email: _react2.default.createElement(_index.Textfield, null),
								password: _react2.default.createElement(_index.Textfield, null) });

exports.default = LoginForm.form();
module.exports = exports['default'];
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Combine all reducers in this file and export the combined reducers.
                                                                                                                                                                                                                                                                   * If we were to do this in store.js, reducers wouldn't be hot reloadable.
                                                                                                                                                                                                                                                                   */

exports.default = createReducer;

var _reduxImmutable = require('redux-immutable');

var _immutable = require('immutable');

var _reactRouterRedux = require('react-router-redux');

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
var routeInitialState = (0, _immutable.fromJS)({
  locationBeforeTransitions: null
});

/**
 * Merge route into the global application state
 */
function routeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : routeInitialState;
  var action = arguments[1];

  switch (action.type) {
    /* istanbul ignore next */
    case _reactRouterRedux.LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
function createReducer(asyncReducers) {
  return (0, _reduxImmutable.combineReducers)(_extends({
    route: routeReducer
  }, asyncReducers));
}
module.exports = exports['default'];
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _immutable = require('immutable');

var _reactRouterRedux = require('react-router-redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create the store with asynchronously loaded reducers
 */

var devtools = window.devToolsExtension || function () {
  return function (noop) {
    return noop;
  };
};

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var history = arguments[1];

  // Create the store with middlewares
  // 1. routerMiddleware: Syncs the location/URL path to the state
  var middlewares = [(0, _reactRouterRedux.routerMiddleware)(history)];

  var enhancers = [_redux.applyMiddleware.apply(undefined, middlewares), devtools()];

  var store = (0, _redux.createStore)((0, _reducers2.default)(), (0, _immutable.fromJS)(initialState), _redux.compose.apply(undefined, enhancers));

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    System.import('./reducers').then(function (reducerModule) {
      var createReducers = reducerModule.default;
      var nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(nextReducers);
    });
  }

  // Initialize it with no other reducers
  store.asyncReducers = {};
  return store;
}
module.exports = exports['default'];

//# sourceMappingURL=bundle.js.map