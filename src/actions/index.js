import { FETCHING_DATA, FETCHING_DATA_SUCCESS,FETCHING_DATA_FAIL  } from './../Utils/ActionTypes';

const axios = require('axios');
const Promise = require('bluebird');
var cors = require('cors');





export const loadData = () => {
  return Promise.coroutine(function* (dispatch) {
    dispatch({ 
      type: FETCHING_DATA, 
      payload: yield axios.get('') 
    })
  })
}


