import React from 'react';


const RegisterComponent = ({usernameHandler,emailHandler,passwordHandler,submit,username,password,validPwd, email,validEmail}) =>{
  const greenCheck = "http://bit.ly/2jqOoqa";
  const redCross = "http://bit.ly/2nGi1IM";

  const usernameReqOne = true ? greenCheck : redCross;
  const usernameReqTwo = false ? greenCheck : redCross;
  const usernameReqThree = true ? greenCheck : redCross;

  const validEmailReq = validEmail ? greenCheck : redCross;
  const emailReqTwo = true ? greenCheck : redCross;
  const emailReqThree = true ? greenCheck : redCross;

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
                src={usernameReqOne} 
                alt="null"/>Username req One
            </div>
            <div className="reqDiv">
              <img 
                className="greenCheck" 
                src={usernameReqTwo} 
                alt="null"/>Username req One
            </div>
            <div className="reqDiv">
              <img 
                className="greenCheck" 
                src={usernameReqThree} 
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
            <div className="reqDiv">
              <img 
                className="greenCheck" 
                src={emailReqTwo} 
                alt="null"/>Email req One
            </div>
            <div className="reqDiv">
              <img 
                className="greenCheck" 
                src={emailReqThree} 
                alt="null"/>Email req One
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
              <p fontSize="14px" style={strengthStyle}>{strength}</p>
            </div>
            <div className="reqDiv">
              <p>{suggestions}</p>
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


