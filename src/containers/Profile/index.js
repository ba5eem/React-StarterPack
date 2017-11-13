import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData as loadUsers } from '../../actions/users';
import { loadData as loadAlbums } from '../../actions/albums';
import { loadData as loadFriends } from '../../actions/friends';
import { loadData as loadInterests } from '../../actions/interests';
import filter from '../../lib/Filter';
import UserInfo from './comps/UserInfo';
import UserAlbums from './comps/UserAlbums';
import UserPhotos from './comps/UserPhotos';



class Profile extends Component {
  constructor(props) {
    super(props);
    
    this.state={ 
      user: '',
      edit: false,
      auth: true
    }
  }

  componentDidMount() { 
    this.props.loadUsers(); 
    this.props.loadAlbums(); 
    this.props.loadFriends(); 
    this.props.loadInterests(); 
  }


  render(){
    //const user = this.state.user;
    //console.log(this.props.friends);
    return (
      <div className='App'>
        <UserInfo 
          user={this.props.user} />
        <UserAlbums
          albums={this.props.albums} />
      </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    user: filter(state.userList,'id',localStorage.userId),
    albums: filter(state.albumList,'userId',localStorage.userId),
    friends: filter(state.friendList,'userId',localStorage.userId),
    interests: state.interestList
  }
}

const ConnectedProfile = connect(
  mapStateToProps,
  {loadUsers,loadAlbums,loadFriends,loadInterests}
)(Profile)

export default ConnectedProfile;