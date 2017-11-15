import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData } from '../../actions/users';
import { Redirect } from 'react-router';
import addNew from '../../lib/Add';
import RegisterForm from './comps/RegisterForm';
import { usernameAuth, passwordAuth, emailAuth } from './lib';

class RegistrationForm extends Component {
    constructor(props){
    super(props);

    this.state = {
      registered: false,
      username: '',
      password: '',
      email: ''
    }
  }


  handleUsername(e){
   this.setState({
    username: usernameAuth(e)
    })
  }

  handlePassword(e){
   this.setState({
    password: passwordAuth(e)
    })
  }

  //email submission is using lib file within register root - it uses a npm validation package - email state will always be undefined unless email passes validation - at which point- will become defined.
  handleEmail(e){
   this.setState({
    email: emailAuth(e)
    })
  }


  handleSubmit(e){
    e.preventDefault();
    let newUser = addNew(e);
  



  }

  render(){
    console.log(this.state.password);
    const { from } = this.props.location.state || { from: { pathname: '/login' } }
    const redirect = this.state.registered;
    if(redirect){ return ( <Redirect to={from}/>) }

    return ( <div>
              <RegisterForm
                handleUsername={this.handleUsername.bind(this)}
                handlePassword={this.handlePassword.bind(this)}
                handleEmail={this.handleEmail.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)} />
             </div>
           )
     }
}


const ConnectedRegistrationForm = connect(
  null,
  {addData}
)(RegistrationForm);

export default ConnectedRegistrationForm;