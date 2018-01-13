import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions';


class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      stopId: 847
    }
  }

  componentWillMount() {
    this.props.loadData(this.state.stopId);
  }






  render(){
    const {data} = this.props.bus;
    console.log(data);
    return (

        <div className="App">
          
        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    bus: state.bus
  }
}


export default connect(mapStateToProps,{loadData})(App);