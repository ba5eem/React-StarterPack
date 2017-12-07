import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comps/index.css';


class SideBarRight extends Component {
  constructor() {
    super();

    this.state={
      test: 'baseem'
    }
  }










  render(){
    return (

   
        <div className="SideBarRight"></div>


    );
  }
} 

const mapStateToProps = (state) => {
  return {
    data: state.dataList
  }
}

const ConnectedSideBarRight = connect(
  mapStateToProps
)(SideBarRight)

export default ConnectedSideBarRight;
