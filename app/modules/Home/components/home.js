import React from 'react';
import LoginFormBuilder from './formsyFormCreater.js'

export default class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errors: {}
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }


  handleOnSubmit(){
    this.setState({ errors: { email: 'Already Taken'}})
  }

  render() {
    return (
    	<div>
  	    <h1>
	        Login Form
  	    </h1>
	  	  <LoginFormBuilder
	  	   	data={[{
            name: 'email',
            title: 'Email',
            type: 'email',
            validation: "isEmail",
            valiadationError: "Enter a valid email",
            required: true
          },
          {
            name: 'password',
            title: 'Password',
            type: 'password',
            required: true
          }]}
          errors={this.state.errors}
          handleOnSubmit={this.handleOnSubmit}
          submitButtonName="submit"
          submitButtonValue="Submit"
	  	   />
    	</div>
    );
  }
}
