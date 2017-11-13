import React from 'react';
import { Link } from 'react-router-dom';

const AuthNav = ({username}) => {
  return (

      <div className="navbar">
        <Link className="navbutton" to="/">Home</Link>
        <br></br>
        <Link className="navbutton" to="/albums">Albums</Link>
        <br></br>
        <Link className="navbutton" to="/friends">Friends</Link>
        <br></br>
        <Link className="navbutton" to="/interest">Interests</Link>
        <br></br>
        <Link className="navbutton" to="/photos">Photos</Link>
        <br></br>
        <Link className="navbutton" to="/users">Users</Link>
        <br></br>
        <Link className="navbutton" to="/profile">{username} Profile</Link>
        <br></br>
        <Link className="navbutton" to="/logout">Logout</Link>
      </div>
      )
}

export default AuthNav;