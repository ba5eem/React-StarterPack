import React from 'react';


const RegisterComponent = ({usernameHandler,emailHandler,passwordHandler,submit,username,validName,password,validPwd, email,validEmail}) =>{
  const greenCheck = "http://bit.ly/2jqOoqa";
  const redCross = "http://bit.ly/2nGi1IM";

  const validNameReq = validName ? greenCheck : redCross;

  const validEmailReq = validEmail ? greenCheck : redCross;

  const score = validPwd ? validPwd.score : '';
  const suggestions = validPwd ? validPwd.feedback.suggestions[0] : '';
  const warnings = validPwd ? validPwd.feedback.warnings : '';

  const strengthArr = ['weak','good','strong','stronger','strongest']
  const styleArr = [{color: 'red'},{color: 'orange'},{color: 'green'},{color: 'green'}]
  const strength = strengthArr[score];
  const strengthStyle = styleArr[score] 







  return (
      <div className="RegisterContainer">
        <form className="RegisterContainer" type="onsubmit" onSubmit={submit}>
{/*USERNAME*/}
          <div className="usernameDiv">
            <h3 className='UsernameHeading'>USERNAME</h3>
            <input 
              onChange={usernameHandler}
              value={username}
              className="UsernameInput">
            </input>
          </div>

          <div className="usernameDivReqs">
            <div className="reqDiv">
              <img 
                className="greenCheck" 
                src={validNameReq} 
                alt="null"/>Username req One
            </div>
          </div>
{/*EMAIL*/}
          <div className="emailDiv">
            <h3 className='EmailHeading'>EMAIL</h3>
            <input 
              onChange={emailHandler}
              value={email}
              className="EmailInput">
            </input>
          </div>

          <div className="emailDivReqs">
            <div className="reqDiv">
              <img 
                className="greenCheck" 
                src={validEmailReq} 
                alt="null"/>Valid Email Address
            </div>

          </div>
{/*PASSWORD*/}
          <div className="passwordDiv">
            <h3 className="PasswordHeading">PASSWORD</h3>
            <input
              onChange={passwordHandler} 
              value={password}
              className="PasswordInput">
            </input>
          </div>

          <div className="passwordDivReqs">
            <div className="reqDiv">
              <h3 style={strengthStyle}>{strength}</h3>
            </div>
            <div className="reqDiv">
              <h4>{suggestions}</h4>
            </div>

          </div>
{/*SUBMIT*/}
          <div className="submitDiv">
            <input 
              type='submit'
              value='SUBMIT'
              className="RegisterSubmit">
            </input>
          </div>

  
        </form>
      </div>


  )
}

export default RegisterComponent;


