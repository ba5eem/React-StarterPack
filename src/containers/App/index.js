import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions';
import { Header, Dashboard } from '../';



class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }








  render(){
    return (

        <div className="app-container">
          <Header />
          <Dashboard />
        </div>

    );
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}


export default connect(mapStateToProps,{loadData})(App);