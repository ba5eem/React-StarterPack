import React from 'react';

const RegisterForm = ({handleSubmit,handleChange}) => {

  return (

      <div className="body">
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
            type="text" 
            name="email" 
            placeholder="email address" 
            onChange={handleChange}/>
          <input 
            type="submit" 
            className="button" 
            value="Complete Registration"/>
        </form>
      </div>

    )//end of return
};

export default RegisterForm;