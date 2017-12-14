import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions';

class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }







  render(){
    return (
        <div className="App">
            CMS 2.0
        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataList
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  {loadData}
)(App)

export default ConnectedApp;