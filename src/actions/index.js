import { FETCHING_DATA, FETCHING_DATA_SUCCESS,FETCHING_DATA_FAIL  } from './../Utils/ActionTypes';
import { token } from './token.js';



const axios = require('axios');
const uri = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.IG_TOKEN}`




export const loadData = () => {
  console.log('loadusers to server ' )
  return function(dispatch){
    return axios.get(uri)
    .then( users => {
      console.log('loadusers? ', users )
      dispatch({
        type: FETCHING_DATA,
        payload: users.data
      });
    });
  }
}



