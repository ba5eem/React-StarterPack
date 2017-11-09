import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/users';
import UserList from './comps/UserList.js';
import SingleUser from './comps/SingleUser.js';
import filterUser from '../../lib/Filter/filterUser';

class User extends Component {
  constructor(props) {
    super(props);
    
    this.state={ 
      user: ''
    }
  }
/*THIS WILL INVOKED LOADTASKS AND BRING THE DATA TO THIS SMART COMPONENT*/
  componentDidMount() {
    this.props.loadData(); 
  }

  loadUser(id,e){
    let users = this.props.users;
    let user = filterUser(users,id)
    console.log(user);
    this.setState({user: user});
  }







  render(){
    const user = this.state.user;
    return (
      <div>
        {user ?

        <SingleUser
          user={this.state.user} />
          :
        <UserList
          loadUser={this.loadUser.bind(this)}
          users={this.props.users} />
        }
      </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    users: state.userList
  }
}

const ConnectedUser = connect(
  mapStateToProps,
  {loadData}
)(User)

export default ConnectedUser;