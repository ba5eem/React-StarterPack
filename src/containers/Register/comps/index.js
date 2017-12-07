import React from 'react';


const RegisterComponent = ({usernameHandler,passwordHandler,submit,username,password}) =>{
  const greenCheck = "http://bit.ly/2jqOoqa";
  const redCross = "http://bit.ly/2nGi1IM";

  const usernameReqOne = true ? greenCheck : redCross;
  const usernameReqTwo = false ? greenCheck : redCross;
  const usernameReqThree = true ? greenCheck : redCross;

  const passwordReqOne = false ? greenCheck : redCross;
  const passwordReqTwo = true ? greenCheck : redCross;
  const passwordReqThree = true ? greenCheck : redCross;

  const emailReqOne = false ? greenCheck : redCross;
  const emailReqTwo = false ? greenCheck : redCross;
  const emailReqThree = true ? greenCheck : redCross;



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
              onChange={usernameHandler}
              value={username}
              className="EmailInput">
            </input>
          </div>

          <div className="emailDivReqs">
            <div className="reqDiv">
              <img 
                className="greenCheck" 
                src={emailReqOne} 
                alt="null"/>Email req One
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
              <img 
                className="greenCheck" 
                src={passwordReqOne} 
                alt="null"/>Password req One
            </div>
            <div className="reqDiv">
              <img 
                className="greenCheck" 
                src={passwordReqTwo} 
                alt="null"/>Password req One
            </div>
            <div className="reqDiv">
              <img 
                className="greenCheck" 
                src={passwordReqThree} 
                alt="null"/>Password req One
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

          <div className="submitDivReqs">

          </div>
        </form>
      </div>


  )
}

export default RegisterComponent;


