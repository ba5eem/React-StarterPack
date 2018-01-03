import { FETCHING_DATA, FETCHING_DATA_SUCCESS,FETCHING_DATA_FAIL  } from './../Utils/ActionTypes';
import { useruri } from './token.js';
const axios = require('axios');


export default function loadData(){
  return dispatch => {

    dispatch({ type: FETCHING_DATA })

    return axios.get(useruri)
      .then(res => {
        return dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data })
      })
      .catch(err => {
        return dispatch({ type: FETCHING_DATA_FAIL, payload: err })
      });

    }
  }


