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
//# sourceMappingURL=formsyFormCreater.js.map