import React, { Component } from 'react';
import AuthNav from './comps/AuthNav';
import NotAuthNav from './comps/NotAuthNav';



class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.state={ 
      user: localStorage.username !== undefined ? true : false,
      admin: localStorage.username === 'Admin'
    }
  }
  render(){
    const user = this.state.user;
    const username = localStorage.username ? localStorage.username+" 's" : null;
    return (
      <div>
        {user ?
        <AuthNav username={username} />
        :
        <NotAuthNav />
        }
      </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

export default Navbar;