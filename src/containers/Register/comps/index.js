import React from 'react';


const RegisterComponent = ({usernameHandler,passwordHandler,submit,username,password}) =>{
  return (
      <div className="RegisterContainer">
        <h3 className='RegisterHeading'>Register</h3>
        <form type="onsubmit" onSubmit={submit}>
          <input 
            onChange={usernameHandler}
            value={username}
            className="RegisterInput">
          </input>

          <h3 className="PasswordHeading">PASSWORD</h3>

          <input
            onChange={passwordHandler} 
            value={password}
            className="PasswordInput">
          </input>

          <input 
            type='submit'
            value='SUBMIT'
            className="RegisterSubmit">
          </input>
        </form>

      </div>


  )
}

export default RegisterComponent;


