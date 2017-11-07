import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/interests';


class Interest extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }
/*THIS WILL INVOKED LOADTASKS AND BRING THE DATA TO THIS SMART COMPONENT*/
  componentDidMount() { 
    this.props.loadData();

  }
/*NOTHING ABOVE NEEDS TO CHANGE*/






  render(){
    return (
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
          <div className="App">
          {this.props.data.map((data,idx)=>{
            return (
              <div key={idx}>
              <h1>Id{data.id}</h1>
              <h2>Title{data.title}</h2>
              <h3>created:{data.createdAt}</h3>
              <h3>Updated:{data.updatedAt}</h3>
              <h3>userId: {data.albumId}</h3>
              </div>
              )
          })
        }
        </div>
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    data: state.interestList
  }
}

const ConnectedInterest = connect(
  mapStateToProps,
  {loadData}
)(Interest)

export default ConnectedInterest;