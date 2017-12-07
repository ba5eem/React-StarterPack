import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comps/index.css';
import RegisterComponent from './comps';

class Register extends Component {
  constructor() {
    super();

    this.state={
      username: '',
      password: ''
    }
  }

  usernameHandler(e){
    let val = e.target.value;
    this.setState({username: val})

  }

  passwordHandler(e){
    let val = e.target.value;
    this.setState({password: val})

  }

  submit(e){
    e.preventDefault();
    let local = {
      username: this.state.username,
      password: this.state.password
    }
    this.setState({
      username: '',
      password: ''
    })
    console.log(local);
  }









  render(){
    return (

   
        <RegisterComponent
          usernameHandler={this.usernameHandler.bind(this)}
          passwordHandler={this.passwordHandler.bind(this)}
          submit={this.submit.bind(this)}
          username={this.state.username}
          password={this.state.password} />


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
