import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/login';
import addNew from '../../lib/Add';
import LoginForm from './comps/LoginForm';


class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      registered: false,
      err: false
    }
  }
  componentDidMount() { this.props.loginUser(); }

  handleChange(e){ addNew(e); }

  handleSubmit(e){
    e.preventDefault();
    let newLogin = addNew(e);
    this.props.loginUser(newLogin);
    setTimeout(function() {
      if(localStorage.username !== undefined){
        this.setState({registered: true})
    }this.setState({err: true}); }.bind(this),1000);
  }

  render(){
    const { from } = this.props.location.state || { from: { pathname: '/users' } }
    const redirect = this.state.registered;
    if(redirect){ return ( <Redirect to={from}/>) }
    
    return (
      <div id="login-form">
        <LoginForm
          err={this.state.err}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)} />
      </div>


    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login
  }
}


const ConnectedLogin = connect(
  mapStateToProps,
  {loginUser}
)(Login);

export default ConnectedLogin;