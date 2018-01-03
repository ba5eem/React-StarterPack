import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData, addCard } from '../../actions';
import { Header, Dashboard } from '../';
import { updateRects } from '../Dashboard/dashboard.components';



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