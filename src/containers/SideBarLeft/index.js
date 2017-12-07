import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comps/index.css';


class SideBarLeft extends Component {
  constructor() {
    super();

    this.state={
      test: 'baseem'
    }
  }










  render(){
    return (

   
        <div className="SideBarLeft"></div>


    );
  }
} 

const mapStateToProps = (state) => {
  return {
    data: state.dataList
  }
}

const ConnectedSideBarLeft = connect(
  mapStateToProps
)(SideBarLeft)

export default ConnectedSideBarLeft;
