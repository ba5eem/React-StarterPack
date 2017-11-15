import filter from '../../../lib/Filter';
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



export function usernameAuth(arr,e){
  let username = e.target.value;
  let unique = filter(arr,'username',username);
  console.log(unique);
  
}

export function emailAuth(arr,e){
  let email = e.target.value;
  let unique = filter(arr,'email',email);
  let auth = validator.validate(email)
  if(auth && unique.length === 0){
    return email;
  }
  else{
    return false;
  }
}

export default { usernameAuth, passwordAuth, emailAuth };


