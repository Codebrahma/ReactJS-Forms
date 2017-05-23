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
//# sourceMappingURL=index.js.map