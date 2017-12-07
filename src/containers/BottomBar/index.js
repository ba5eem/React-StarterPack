import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comps/index.css';


class BottomBar extends Component {
  constructor() {
    super();

    this.state={
      test: 'baseem'
    }
  }










  render(){
    return (

   
        <div className="BottomBar"></div>


    );
  }
} 

const mapStateToProps = (state) => {
  return {
    data: state.dataList
  }
}

const ConnectedBottomBar = connect(
  mapStateToProps
)(BottomBar)

export default ConnectedBottomBar;
