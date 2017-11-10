import React from 'react';

const LoginForm = ({err,handleSubmit,handleChange}) => {

  return (

      <div id="registration-form">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username" 
            placeholder="username" 
            onChange={handleChange}/>
          <input 
            type="password" 
            name="password" 
            placeholder="password" 
            onChange={handleChange}/>
          <input 
            type="submit" 
            className="button" 
            value="Login"/>
        </form>
        {err ? <div>Incorrect Username or Password</div> : null }
      </div>


    )//end of return
};

export default LoginForm;