import { LOGIN_USER,LOGOUT_USER, } from '../actions/login';



const login = (state = [], action) => {
  switch(action.type){
    case LOGIN_USER:
    console.log("login action: ", action.user)
    localStorage.setItem('auth', true);
    localStorage.setItem('username', action.user);
    localStorage.setItem('userId', action);
      return action.user;
    case LOGOUT_USER:
    console.log(action.user)
      return null;
    default:
      return state
  }
}

export default login;