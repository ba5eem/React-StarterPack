import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData,editData } from '../../actions/users';



class Profile extends Component {
  constructor(props) {
    super(props);
    
    this.state={ 
      user: '',
      edit: false,
      auth: true
    }
  }

  componentDidMount() { this.props.loadData(); }


  render(){
    const user = this.state.user;
    return (
      <div>

      </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    users: state.userList
  }
}

const ConnectedProfile = connect(
  mapStateToProps,
  {loadData,editData}
)(Profile)

export default ConnectedProfile;