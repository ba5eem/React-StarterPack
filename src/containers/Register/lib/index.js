const validator = require("email-validator");
var zxcvbn = require('zxcvbn');

let local = {}

export function passwordAuth(e){
  let pwd = e.target.value;
  let auth = zxcvbn(pwd);
  if(auth.score >=1){
    return pwd;
  }
}



export function usernameAuth(e){
  
}

export function emailAuth(e){
  let email = e.target.value;
  let auth = validator.validate(email)
  if(auth){
    return email;
  }
  console.log('email: ',email);
  console.log('email auth: ',auth);
}

export default { usernameAuth, passwordAuth, emailAuth };


