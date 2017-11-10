import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData } from '../../actions/users';
import addNew from '../../lib/Add';

class RegistrationForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){ addNew(e); }

  handleSubmit(e){
    e.preventDefault();
    let newUser = addNew(e);
    console.log(newUser);
    this.props.addData(newUser);
  }



  render(){
    return (
      <div id="registration-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
          <input type="text" name="email" placeholder="email address" onChange={this.handleChange}/>
          <input type="submit" className="button" value="Complete Registration"/>
        </form>
      </div>

    )
  }


}


const ConnectedRegistrationForm = connect(
  null,
  {addData}
)(RegistrationForm);

export default ConnectedRegistrationForm;