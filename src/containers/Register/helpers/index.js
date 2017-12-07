let local = {
  length: false,
  num: false,
  capital: false
};

export function pwdValidator(val){
  if(val.length > 3)     { local.length  = true }
    console.log(local.length);
  if(val.match(/\d+/g))  { local.num     = true }
    console.log(local.num);
  if(val.match(/[A-Z]/g)){ local.capital = true }
    console.log(local.capital);

  if(local.length === true, local.num === true, local.capital === true){
    return true;
  }
  else{
    return local;
  }
  
}

export function clearLocal(){
  local = {};
}

export default { pwdValidator, clearLocal };