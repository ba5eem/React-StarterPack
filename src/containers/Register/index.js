import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData } from '../../actions/users';
import addNew from '../../lib/Add';
import RegisterForm from './comps/RegisterForm';

class RegistrationForm extends Component {

  handleChange(e){ addNew(e); }

  handleSubmit(e){
    e.preventDefault();
    let newUser = addNew(e);
    console.log(newUser);
    this.props.addData(newUser);
  }

  render(){
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