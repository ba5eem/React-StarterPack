import React from 'react';

const RegisterForm = ({handleSubmit,handleUsername,handlePassword,handleEmail}) => {

  return (

      <div className="body">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username" 
            placeholder="username" 
            onChange={handleUsername}/>
          <input 
            type="text" 
            name="password" 
            placeholder="password" 
            onChange={handlePassword}/>
          <input 
            type="text" 
            name="email" 
            placeholder="email address" 
            onChange={handleEmail}/>
          <input 
            type="submit" 
            className="button" 
            value="Complete Registration"/>
        </form>
      </div>

    )//end of return
};

export default RegisterForm;