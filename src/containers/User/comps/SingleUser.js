import React from 'react';

const SingleUser = ({user}) => {
  return (

      <div className="App">
          <h1>ID{user ? user[0].id : null}</h1>
          <h2>Username{user ? user[0].username : null}</h2>
          <h3>password{user ? user[0].password : null}</h3>
          <h3>Email{user ? user[0].email : null}</h3>
          <img src={user ? user[0].avatar : null} alt=""></img>
      </div>
      )
}

export default SingleUser;