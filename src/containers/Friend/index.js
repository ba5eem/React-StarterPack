import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/friends';


class Friend extends Component {
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
              <h1>Id: {data.id}</h1>
              <h2>Username: {data.title}</h2>
              <h2>email: {data.email}</h2>
              <img src={data.avatar} alt=""></img>
              <h3>created: {data.createdAt}</h3>
              <h3>Updated: {data.updatedAt}</h3>
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
    data: state.friendList
  }
}

const ConnectedFriend = connect(
  mapStateToProps,
  {loadData}
)(Friend)

export default ConnectedFriend;