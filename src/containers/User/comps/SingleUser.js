import React from 'react';

const SingleUser = ({user,edit,auth,editNow,backToUsers,handleChangeUsername,handleChangePassword,handleChangeEmail}) => {
  return (

      <div className="App">
          <button onClick={(e)=>backToUsers(e)}>Back</button>
        {!edit ?
          <form onSubmit={this.handleSubmit}>
            <h1>ID{user ? user[0].id : null}</h1>
            <h2>Username{user ? user[0].username : null}</h2>
            <h3>password{user ? user[0].password : null}</h3>
            <h3>Email{user ? user[0].email : null}</h3>
            <img src={user ? user[0].avatar : null} alt=""></img>
          </form>
        : <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              placeholder={user[0].username}
              onChange={handleChangeUsername}/>
            <input 
              type="text" 
              placeholder={user[0].password} 
              onChange={handleChangePassword}/>
            <input 
              type="text" 
              placeholder={user[0].email} 
              onChange={handleChangeEmail}/>
          </form>}
          {auth ? 
            <button 
              onClick={(e)=>editNow(user,e)}>
              {edit ? 'SUBMIT' : 'EDIT'}</button> : null}
      </div>
      )
}

export default SingleUser;