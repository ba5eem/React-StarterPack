const validator = require("email-validator");

let local = {}

export function passwordAuth(e){

  //security check





  console.log(e);

  return e;

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


