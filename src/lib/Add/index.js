var local = {}; 

function addNew(e){
  console.log('addNew method lib helper has been fired');
  let target   = e.target.name;
  let value    = e.target.value;
  let title    = (target === 'title');
  let username = (target === 'username');
  let password = (target === 'password');
  let email    = (target === 'email');

  if(title)    {local.title    = value} 
  if(username) {local.username = value}
  if(password) {local.password = value}
  if(email)    {local.email    = value}

  console.log(local);
  return local;
}

export default addNew;


/*id = element id from DB - this can be used for verification against props array*/

/*e represents event - possible definitions e.target.value; etc...*/


