import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comps/index.css';
import RegisterComponent from './comps';
import {pwdValidator} from './helpers';
const validator = require("email-validator");
const zxcvbn = require('zxcvbn');


class Register extends Component {
  constructor() {
    super();

    this.state={
      username: '',
      email: '',
      validEmail: undefined,
      password: '',
      validPwd: undefined
    }
  }

  usernameHandler(e){
    let val = e.target.value;
    this.setState({username: val})

  }

  emailHandler(e){
    let val = e.target.value;

    this.setState({
      validEmail: validator.validate(val),
      email: val
    })

  }

  passwordHandler(e){
    let val = e.target.value;
    this.setState({
      validPwd: zxcvbn(val),
      password: val
    })

  }

  submit(e){
    e.preventDefault();
    let local = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    this.setState({
      username: '',
      email: '',
      password: ''
    })
    console.log(local);
  }









  render(){
    return (

   
        <RegisterComponent
          usernameHandler={this.usernameHandler.bind(this)}
          emailHandler={this.emailHandler.bind(this)}
          passwordHandler={this.passwordHandler.bind(this)}
          submit={this.submit.bind(this)}
          validEmail={this.state.validEmail}
          email={this.state.email}
          username={this.state.username}
          password={this.state.password}
          validPwd={this.state.validPwd} />


    );
  }
} 

const mapStateToProps = (state) => {
  return {
    data: state.dataList
  }
}

const ConnectedRegister = connect(
  mapStateToProps
)(Register)

export default ConnectedRegister;
