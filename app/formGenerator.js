import Form from './form.js';

class FormGenerator {
	constructor() {
		this.form = this.form.bind(this);
		this.use = this.use.bind(this);
	}
	use(componentPayload){
		this.componentPayload = componentPayload;
	}

	form() {
		return Form(this.componentPayload);
	}
}

module.exports = FormGenerator;
