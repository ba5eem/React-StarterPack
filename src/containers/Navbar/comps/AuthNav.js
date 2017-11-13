import React from 'react';
import { Link } from 'react-router-dom';

const AuthNav = ({username}) => {
  return (

      <div className="navbar">
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
        <Link to="/profile">{username} Profile</Link>
        <br></br>
        <Link to="/logout">Logout</Link>
      </div>
      )
}

export default AuthNav;