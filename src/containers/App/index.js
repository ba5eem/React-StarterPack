import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comps/index.css';
import TopBar from '../TopBar';
import SideBarRight from '../SideBarRight'
import SideBarLeft from '../SideBarLeft'
import MainBody from '../MainBody'
import BottomBar from '../BottomBar'

class App extends Component {
  constructor() {
    super();

    this.state={
      test: 'baseem'
    }
  }










  render(){
    return (
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
        <div className="MainContainer">
          <TopBar />
          <SideBarLeft />
          <MainBody />
          <SideBarRight />
          <BottomBar />

        </div>
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    data: state.dataList
  }
}

const ConnectedApp = connect(
  mapStateToProps
)(App)

export default ConnectedApp;
