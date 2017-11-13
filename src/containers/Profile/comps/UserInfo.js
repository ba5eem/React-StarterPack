import React from 'react';

const UserInfo = ({user}) => {
  let username = (user[0] ? 'Hello '+user[0].username + ' welcome to your profile page' : null)
  return ( <div>{username}</div>)
}

export default UserInfo;