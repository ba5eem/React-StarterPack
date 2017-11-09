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
      user: '',
      username: '',
      password: '',
      email: '',
      edit: false,
      auth: true
    }
  }
/*THIS WILL INVOKED LOADTASKS AND BRING THE DATA TO THIS SMART COMPONENT*/
  componentDidMount() {
    this.props.loadData(); 
  }

  handleChangeUsername(event){ this.setState({ username: event.target.value }) }

  handleChangePassword(event){ this.setState({ password: event.target.value }) }

  handleChangeEmail(event){ this.setState({ email: event.target.value }) }

  loadUser(id,e){
    let users = this.props.users;
    let user = filterUser(users,id)
    console.log(user);
    this.setState({user: user});
  }
  backToUsers(e){
    e.preventDefault();
    this.setState({user: null});
  }
  editNow(user,e){
    this.setState({user: user});
    this.setState({edit: true});
    if(this.state.edit){
      let user = {
      id: this.state.user[0].id,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      userstatus: (this.state.email ? 'active' : 'inactive')
    }
    console.log(user);
    //this.props.editUser(user);
    this.setState({user: null});
    this.setState({edit: false});
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
          handleChangeUsername={this.handleChangeUsername.bind(this)}
          handleChangePassword={this.handleChangePassword.bind(this)}
          handleChangeEmail={this.handleChangeEmail.bind(this)}
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