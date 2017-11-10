import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadData,editData } from '../../actions/users';



class Navbar extends Component {
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
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/albums">Albums</Link>
        <br></br>
        <Link to="/friends">Friends</Link>
        <br></br>
        <Link to="/interest">Interests</Link>
        <br></br>
        <Link to="/photos">Photos</Link>
        <br></br>
        <Link to="/users">Users</Link>
        <br></br>
        <Link to="/profile">Profile</Link>
        <br></br>
        <Link to="/register">Register</Link>
        <br></br>
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/logout">Logout</Link>
      </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    users: state.userList
  }
}

const ConnectedNavbar = connect(
  mapStateToProps,
  {loadData,editData}
)(Navbar)

export default ConnectedNavbar;