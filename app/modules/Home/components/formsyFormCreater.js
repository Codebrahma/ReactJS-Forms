import React from 'react';
import FormGenerator from '../../Common/formGenerator.js';
import {Textfield, Textarea} from '../../Common/components/formsyComponents/index.js';

//Example Usage.
//Create a new instance of `FormGenerator` for each time when you are generating a Form.
//Load your custom formsy components using `use` method.
//Generator will use your components to create forms.
//then export by calling `.form` method, which will return a React component
//Import that component where ever you want to generate form and pass your attributes as `data={propAttributes}`.

var LoginForm = new FormGenerator();
LoginForm.use({ email: <Textfield />,
								password: <Textfield />});

export default LoginForm.form();