import React from 'react';


const LoginComponent = ({loginHandler,passwordHandler,submit,login,password}) =>{
  return (
      <div className="LoginContainer">
        <h3 className='LoginHeading'>LOGIN</h3>
        <form type="onsubmit" onSubmit={submit}>
          <input 
            onChange={loginHandler}
            value={login}
            className="LoginInput">
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
            className="LoginSubmit">
          </input>
        </form>

      </div>


  )
}

export default LoginComponent;


