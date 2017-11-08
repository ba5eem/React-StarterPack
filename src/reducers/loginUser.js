import { LOGIN_USER,LOGOUT_USER, } from '../actions/login';



const login = (state = [], action) => {
  switch(action.type){
    case LOGIN_USER:
    console.log("login action: ", action.data)
    localStorage.setItem('auth', true);
    localStorage.setItem('username', action.data);
    localStorage.setItem('userId', action);
      return action.data;
    case LOGOUT_USER:
    console.log(action.data)
      return null;
    default:
      return state
  }
}

export default login;