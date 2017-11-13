import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthNav = () => {
  return (

      <div className="navbar">
        <Link className="navbutton" to="/">Home</Link>
        <br></br>
        <Link className="navbutton" to="/register">Register</Link>
        <br></br>
        <Link className="navbutton" to="/login">Login</Link>
      </div>
      )
}

export default NotAuthNav;