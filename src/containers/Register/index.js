import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData } from '../../actions/users';
import { Redirect } from 'react-router';
import addNew from '../../lib/Add';
import RegisterForm from './comps/RegisterForm';

class RegistrationForm extends Component {
    constructor(props){
    super(props);

    this.state = {
      registered: false
    }
  }

  handleChange(e){ addNew(e); }

  handleSubmit(e){
    e.preventDefault();
    let newUser = addNew(e);
    this.props.addData(newUser);
    this.setState({registered: true})
  }

  render(){
    const { from } = this.props.location.state || { from: { pathname: '/login' } }
    const redirect = this.state.registered;
    if(redirect){ return ( <Redirect to={from}/>) }

    return ( <div>
              <RegisterForm
                handleChange={this.handleChange.bind(this)}
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