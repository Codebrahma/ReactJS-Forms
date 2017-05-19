import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import _ from 'lodash';
import { SubmitButton } from './formsyComponents/index.js';

const Form = (componentPayload) => {
	return class FormWithSubmitButton extends Component {
		static propTypes = {
		  data: PropTypes.array.isRequired,
		  handleOnSubmit: PropTypes.func.isRequired,
		  submitButtonValue: PropTypes.string,
		  submitButtonName: PropTypes.string
	  };

	  static defaultProps = {
		  submitButtonValue: "submit",
		  submitButtonName: "Submit"
	  };

		constructor(props){
			super(props);
			this.state = {
	      canSubmit: false
	    };

	    this.enableButton  = this.enableButton.bind(this);
	    this.disableButton = this.disableButton.bind(this);
	  	this.generateInputComponents = this.generateInputComponents.bind(this);
	  }

	  generateInputComponents(){
			let formInputs = _.map(this.props.data, (input, index) => {
				const component = componentPayload[input.type];
				return (<component.type key={index} {...input} />);
			});

			return formInputs;
	  }

	  enableButton(){
	    this.setState({ canSubmit: true });
	  }

	  disableButton(){
	    this.setState({ canSubmit: false });
	  }

	  componentWillReceiveProps(nextProps){
	    if(!_.isEmpty(nextProps.errors)){
	      this.refs.form.updateInputsWithError(nextProps.errors);
	    };
	  };

	  render(){ 
	  	return(
	      <div>
	        <Formsy.Form
	          ref="form"
	          onInvalid={this.disableButton}
	          onValid={this.enableButton}
	          onValidSubmit={this.props.handleOnSubmit}
	         >
	          <div>
  		      	{this.generateInputComponents()}
	          </div>

	          <SubmitButton
	            name={this.props.submitButtonName}
	            value={this.props.submitButtonValue}
	            disabled={!this.state.canSubmit}
	          />
	        </Formsy.Form>        
	      </div>
	  	);
	  }
	};
};

export default Form;