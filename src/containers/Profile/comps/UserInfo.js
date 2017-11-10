import React from 'react';

const UserInfo = ({user}) => {
  let username = (user[0] ? user[0].username : null)
  return ( <div>Hello {username} welcome to your profile page</div>)
}

export default UserInfo;