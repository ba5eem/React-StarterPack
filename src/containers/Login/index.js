import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comps/index.css';
import LoginComponent from './comps';

class Login extends Component {
  constructor() {
    super();

    this.state={
      login: '',
      password: ''
    }
  }

  loginHandler(e){
    let val = e.target.value;
    this.setState({login: val})

  }

  passwordHandler(e){
    let val = e.target.value;
    this.setState({password: val})

  }

  submit(e){
    e.preventDefault();
    let local = {
      login: this.state.login,
      password: this.state.password
    }
    this.setState({
      login: '',
      password: ''
    })
  }









  render(){
    return (

   
        <LoginComponent
          loginHandler={this.loginHandler.bind(this)}
          passwordHandler={this.passwordHandler.bind(this)}
          submit={this.submit.bind(this)}
          login={this.state.login}
          password={this.state.password} />


    );
  }
} 

const mapStateToProps = (state) => {
  return {
    data: state.dataList
  }
}

const ConnectedLogin = connect(
  mapStateToProps
)(Login)

export default ConnectedLogin;
