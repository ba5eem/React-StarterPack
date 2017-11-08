import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppHeader from './comps/AppHeader.js';
import Login from '../Login';
import Album from '../Album';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state={ 
      auth: []
    }
  }
  






  render(){
    console.log(this.props);
    return (
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
        <div className="app-routes">
          <Switch>
            {this.props.auth.auth ? <Route path="/" component={Album} /> : <Route path="/" component={Login} /> }
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