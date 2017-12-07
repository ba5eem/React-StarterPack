import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comps/index.css';


class TopBar extends Component {
  constructor() {
    super();

    this.state={
      test: 'baseem'
    }
  }










  render(){
    return (

   
       <div className="TopBar"></div>


    );
  }
} 

const mapStateToProps = (state) => {
  return {
    data: state.dataList
  }
}

const ConnectedTopBar = connect(
  mapStateToProps
)(TopBar)

export default ConnectedTopBar;
