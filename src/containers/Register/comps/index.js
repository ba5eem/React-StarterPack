import React from 'react';


const RegisterComponent = ({usernameHandler,passwordHandler,submit,username,password}) =>{
  return (
      <div className="RegisterContainer">
        <form className="RegisterContainer" type="onsubmit" onSubmit={submit}>

          <div className="usernameDiv">
            <h3 className='UsernameHeading'>USERNAME</h3>
            <input 
              onChange={usernameHandler}
              value={username}
              className="UsernameInput">
            </input>
          </div>

          <div className="usernameDivReqs">

          </div>

          <div className="emailDiv">
            <h3 className='EmailHeading'>EMAIL</h3>
            <input 
              onChange={usernameHandler}
              value={username}
              className="EmailInput">
            </input>
          </div>

          <div className="emailDivReqs">

          </div>

          <div className="passwordDiv">
            <h3 className="PasswordHeading">PASSWORD</h3>
            <input
              onChange={passwordHandler} 
              value={password}
              className="PasswordInput">
            </input>
          </div>

          <div className="passwordDivReqs">

          </div>

          <div className="submitDiv">
            <input 
              type='submit'
              value='SUBMIT'
              className="RegisterSubmit">
            </input>
          </div>

          <div className="submitDivReqs">

          </div>
        </form>
      </div>


  )
}

export default RegisterComponent;


