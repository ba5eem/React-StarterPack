import React from 'react';

const UserList = ({users,loadUser}) => {

  return (

      <div className="App">
          {users.map((user,idx)=>{
            return (
              <div key={idx}>
              <h1>ID{user.id}</h1>
              <span onClick={(e)=>loadUser(user.id,e)}>Username: {user.username}</span>
              <h3>password{user.password}</h3>
              <h3>Email{user.email}</h3>
              <img src={user.avatar} alt=""></img>
              <h3>created{user.createdAt}</h3>
              <h3>updated{user.updatedAt}</h3>
              </div>
              )
          })
        }
        </div>

    )//end of return
};

export default UserList;