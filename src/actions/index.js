const axios = require('axios');


/*ACTIONS*/
export const LOAD_DATA = 'LOAD_DATA';
export const ADD_DATA = 'ADD_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const DELETE_DATA = 'DELETE_DATA';


export const loadData = () => {
  return function(dispatch){
    return axios.get('/users')
    .then( users => {
      dispatch({
        type: LOAD_DATA,
        payload: users.data
      });
    });
  }
}