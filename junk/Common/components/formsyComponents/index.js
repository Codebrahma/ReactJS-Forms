/**
 * index.js
 *
 * Entry file for UserAuthentication Components,
 * used just to export form components
 * wrapped by formsy-react Higher Order Component
 */
import { HOC } from 'formsy-react';

/**
 * importing user defined components
 */
import Input from './textfield';
import MultilineInput from './textarea';
import Submit from './submitButton';
import Radio from './radioButton';
import Check from './checkBox';
import File from './file.js';

/*eslint-disable */

const Textfield    = HOC(Input);
const Textarea     = HOC(MultilineInput);
const SubmitButton = HOC(Submit);
const RadioButton  = HOC(Radio);
const CheckBox 		 = HOC(Check);
const FileInput		 = HOC(File);

/*eslint-enable */

export {
  Textfield,
  Textarea,
  SubmitButton,
  RadioButton,
  CheckBox,
  FileInput,
};
