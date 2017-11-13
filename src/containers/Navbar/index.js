import React, { Component } from 'react';
import AuthNav from './comps/AuthNav';
import NotAuthNav from './comps/NotAuthNav';
import style from '../../index.css';
import AppHeader from '../App/comps/AppHeader'



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
        <AppHeader />
      <div className='body'>
        {user ?
        <AuthNav username={username} />
        :
        <NotAuthNav />
        }
      </div>
      </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

export default Navbar;