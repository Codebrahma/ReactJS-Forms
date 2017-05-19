import Form from './components/form.js';

export default class FormGenerator {
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

