import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions';
import { apiKey } from '../../keys.js';
const stopID = 879;
const url = `http://api.thebus.org/arrivals/?key=${apiKey}&stop=${stopID}`;
const config = {
    "Access-Control-Allow-Origin":  "*",
"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
};
let sentData={
    method:"GET",
    mode: 'cors',
    header: config,
    body:''
};

class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }

  componentWillMount() {
    // this.props.loadData();
    fetch(url,config)
    .then((data) => {
      console.log('some')
      console.log(data);
    }).catch((err) => {
      console.log('shit dont work')
    })
  }






  render(){
    return (

        <div className="App">
          OLA!
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