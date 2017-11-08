import React, { Component } from 'react';
import { connect } from 'react-redux';


class Logout extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    }

  }



  render(){
    return (
      <div id="logout-form">
          Hello from Logout form
      </div>

    )
  }


}


const ConnectedLogout = connect(
  null,
)(Logout);

export default ConnectedLogout;