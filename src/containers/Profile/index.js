import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData as loadUsers } from '../../actions/users';
import { loadData as loadAlbums } from '../../actions/albums';
import { loadData as loadPhotos } from '../../actions/photos';
import { loadData as loadFriends } from '../../actions/friends';
import { loadData as loadInterests } from '../../actions/interests';
import filter from '../../lib/Filter';
import UserInfo from './comps/UserInfo';
import UserAlbums from './comps/UserAlbums';



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
    this.props.loadPhotos(); 
    this.props.loadFriends(); 
    this.props.loadInterests(); 
  }


  render(){
    //const user = this.state.user;
    console.log('user: ',this.props.user)
    return (
      <div className='App'>
        <UserInfo user={this.props.user} />
        <UserAlbums />

      </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    user: filter(state.userList,'id',localStorage.userId),
    albums: state.albumList,
    photos: state.photoList,
    friends: state.friendList,
    interests: state.interestList
  }
}

const ConnectedProfile = connect(
  mapStateToProps,
  {loadUsers,loadAlbums,loadPhotos,loadFriends,loadInterests}
)(Profile)

export default ConnectedProfile;