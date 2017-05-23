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
//# sourceMappingURL=formGenerator.js.map