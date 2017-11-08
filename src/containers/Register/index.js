import React, { Component } from 'react';
import { connect } from 'react-redux';


class RegistrationForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    }

  }



  render(){
    return (
      <div id="registration-form">
          Hello from registration form
      </div>

    )
  }


}


const ConnectedRegistrationForm = connect(
  null,
)(RegistrationForm);

export default ConnectedRegistrationForm;