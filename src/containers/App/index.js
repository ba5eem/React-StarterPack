import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Profile from '../Profile';
import AppHeader from './comps/AppHeader'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state={ 
      auth: []
    }
  }
  






  render(){
    return (
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
        <div className="app-routes">
          <Switch>
            {localStorage.username !== 'undefined' ? <Route path="/" component={Profile} /> : <Route path="/" component={Login} /> }
          </Switch>
        </div>
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    data: state.dataList,
    auth: state.login
  }
}

const ConnectedApp = connect(
  mapStateToProps
)(App)

export default ConnectedApp;