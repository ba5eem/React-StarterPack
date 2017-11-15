import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData as loadUsers } from '../../actions/users';
import { addData as register } from '../../actions/users';
import { Redirect } from 'react-router';
import addNew from '../../lib/Add';
import RegisterForm from './comps/RegisterForm';
import { usernameAuth, passwordAuth, emailAuth } from './lib';
let local = {};

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

  componentDidMount() { this.props.loadUsers(); }

  //username is using lib fil, checking for uniqueness
  handleUsername(e){
   this.setState({
    username: usernameAuth(this.props.users,e)
    })
  }

  //password is using lib file, using npm password check for strength right will only return with value if score is 1 or more
  handlePassword(e){
   this.setState({
    password: passwordAuth(e)
    })
  }

  //email using lib file check validation, and uniqueness
  handleEmail(e){
   this.setState({
    email: emailAuth(this.props.users,e)
    })
  }


  handleSubmit(e){
   e.preventDefault();
   local.username = this.state.username;
   local.password = this.state.password;
   local.email = this.state.email;
   this.props.register(local);
  }

  render(){
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

const mapStateToProps = (state) => {
  return {
    users: state.userList
  }
}


const ConnectedRegistrationForm = connect(
  mapStateToProps,
  {loadUsers,register}
)(RegistrationForm);

export default ConnectedRegistrationForm;