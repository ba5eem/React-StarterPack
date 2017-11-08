import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/users';


class User extends Component {
  constructor(props) {
    super(props);
    
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
    console.log(this.props);
    return (
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
        <div className="App">
          {this.props.data.map((data,idx)=>{
            return (
              <div key={idx}>
              <h1>ID{data.id}</h1>
              <h2>Username{data.username}</h2>
              <h3>password{data.password}</h3>
              <h3>Email{data.email}</h3>
              <img src={data.avatar} alt=""></img>
              <h3>created{data.createdAt}</h3>
              <h3>updated{data.updatedAt}</h3>
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
    data: state.userList
  }
}

const ConnectedUser = connect(
  mapStateToProps,
  {loadData}
)(User)

export default ConnectedUser;