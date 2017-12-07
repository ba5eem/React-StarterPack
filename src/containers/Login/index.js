import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comps/index.css';
import LoginComponent from './comps';

class Login extends Component {
  constructor() {
    super();

    this.state={
      test: 'baseem'
    }
  }










  render(){
    return (

   
        <LoginComponent />


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
