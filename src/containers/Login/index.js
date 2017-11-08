import React, { Component } from 'react';
import { connect } from 'react-redux';


class Login extends Component {
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
      <div id="login-form">
          Hello from Login form
      </div>

    )
  }


}


const ConnectedLogin = connect(
  null,
)(Login);

export default ConnectedLogin;