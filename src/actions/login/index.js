import httpRequest from '../../lib/httpRequest';
const axios = require('axios');
/*URI ROUTES for HTTP REQUEST*/
const _login = 'login';
const _logout = 'logout';
/*HTTP METHODS*/
const GET = 'GET';
const POST = 'POST';
/*ACTIONS*/
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export const loginUser = (data) => {
  console.log('Login action has been Activated: ',data);
  return function(dispatch){
    return httpRequest(POST,_login,data, function(err,data){
      console.log('ACTION loadData before dispatch: ',data);
      dispatch({
        type: LOGIN_USER,
        data: data
      })
    })
  }
}

export const logoutUser = () => {
  return function(dispatch){
    return axios.get('/api/logout')
    .then( () => {
      dispatch({
        type: LOGOUT_USER,
        user: null
      });
    });
  }
}


