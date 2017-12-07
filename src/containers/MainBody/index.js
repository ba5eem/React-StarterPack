import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comps/index.css';
import Login from '../Login';

class MainBody extends Component {
  constructor() {
    super();

    this.state={
      test: 'baseem'
    }
  }










  render(){
    return (

   
        <div className="MainBody">
          <Login />
      
        </div>


    );
  }
} 

const mapStateToProps = (state) => {
  return {
    data: state.dataList
  }
}

const ConnectedMainBody = connect(
  mapStateToProps
)(MainBody)

export default ConnectedMainBody;
