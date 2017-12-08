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
      email: '',
      validEmail: true,
      password: '',
      validPwd: undefined
    }
  }

  emailHandler(e){
    let val = e.target.value;

    this.setState({
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
    this.setState({validEmail: validator.validate(this.state.email)})

    setTimeout(function() {
      this.setState({validEmail: true}); }.bind(this),900);

    let local = {
      email: this.state.email,
      password: this.state.password
    }
    this.setState({
      email: '',
      password: ''
    })
    console.log(local);
  }









  render(){
    return (

   
        <RegisterComponent
          emailHandler={this.emailHandler.bind(this)}
          passwordHandler={this.passwordHandler.bind(this)}
          submit={this.submit.bind(this)}
          email={this.state.email}
          validEmail={this.state.validEmail}
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
