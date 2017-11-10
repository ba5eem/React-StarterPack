import { LOGIN_USER,LOGOUT_USER, } from '../actions/login';



const login = (state = [], action) => {
  switch(action.type){
    case LOGIN_USER:
    console.log("login action: ", action.data)
    localStorage.setItem('auth', true);
    localStorage.setItem('username', action.data.username);
    localStorage.setItem('userId', action.data.id);
      return action.data;
    case LOGOUT_USER:
      state.push({auth: false});
    console.log(action.data)
      return state;
    default:
      return state
  }
}

export default login;