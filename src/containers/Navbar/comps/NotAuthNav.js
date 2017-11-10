import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthNav = () => {
  return (

      <div className="App">
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/register">Register</Link>
        <br></br>
        <Link to="/login">Login</Link>
      </div>
      )
}

export default NotAuthNav;