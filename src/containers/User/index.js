import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData,editData } from '../../actions/users';
import UserList from './comps/UserList.js';
import SingleUser from './comps/SingleUser.js';
import filterUser from '../../lib/Filter/filterUser';
import editUser from '../../lib/Edit';


class User extends Component {
  constructor(props) {
    super(props);
    
    this.state={ 
      user: '',
      edit: false,
      auth: true
    }
  }
/*THIS WILL INVOKED LOADTASKS AND BRING THE DATA TO THIS SMART COMPONENT*/
  componentDidMount() {
    this.props.loadData(); 
  }

  handleChange(e){ editUser(e); }

  loadUser(id,e){ this.setState({user: filterUser(this.props.users,id)}); }
  
  backToUsers(e){
    e.preventDefault();
    this.setState({user: null});
  }
  editNow(user,e){
    let editedUser = editUser(e);
    this.setState({user: user, edit: true});
    if(this.state.edit){
      editedUser.id = user[0].id;
      this.props.editData(editedUser);
      this.setState({user: null, edit: false});
    }
  }

  render(){
    const user = this.state.user;
    return (
      <div>
        {user ?

        <SingleUser
          edit={this.state.edit}
          auth={this.state.auth}
          editNow={this.editNow.bind(this)}
          backToUsers={this.backToUsers.bind(this)}
          handleChange={this.handleChange.bind(this)}
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
  {loadData,editData}
)(User)

export default ConnectedUser;