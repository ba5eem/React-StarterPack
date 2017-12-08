import React from 'react';


const RegisterComponent = ({emailHandler,passwordHandler,submit,password,validPwd,email,validEmail}) =>{
  const emailErr = "Looks like your email is not complete";

  const score = validPwd ? validPwd.score : '';
  const suggestions = validPwd ? validPwd.feedback.suggestions[0] : '';
  const warnings = validPwd ? validPwd.feedback.warnings : '';

  const strengthArr = ['weak','good','strong','stronger','strongest']
  const styleArr = [{color: 'red'},{color: 'orange'},{color: 'green'},{color: 'green'}]
  const strength = strengthArr[score];
  const strengthStyle = styleArr[score] 







  return (
      <div className="RegisterContainer">
        <h3 className='RegisterContainerHeading'>SIGN UP</h3>
        <form className="RegisterForm" type="onsubmit" onSubmit={submit}>
          <div className="emailDiv">
            <input 
              onChange={emailHandler}
              type="text"
              value={email}
              placeholder="Email Address"
              className="emailInput">
            </input>
            <h2>{validEmail ? '' : emailErr }</h2>
          </div>
          <div className="emailDiv">
            <input 
              onChange={passwordHandler}
              type="text"
              value={password}
              placeholder="Password"
              className="emailInput">
            </input>
            <h2 style={strengthStyle}>{strength}</h2>
          </div>
          <div className="emailDiv">
            <input 
              type='submit'
              value="SUBMIT"
              className="submit">
            </input>
          </div>
         </form>
      </div>


  )
}

export default RegisterComponent;


