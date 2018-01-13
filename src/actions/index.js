import { FETCHING_DATA, FETCHING_DATA_SUCCESS,FETCHING_DATA_FAIL  } from './../Utils/ActionTypes';
const axios = require('axios');

const stopID = 883;
const apiKey = "5C2E94D8-425D-4791-B362-56C22EBBE25C";



export const loadData = (id) => {
  return function(dispatch){
    return axios.get(`/bus/${id}`)
    .then((data) => {
      dispatch({
        type: FETCHING_DATA_SUCCESS,
        payload: data
      });
    }).catch((err) => {
      console.log('shit dont work')
      dispatch({
        type: FETCHING_DATA_FAIL,
        payload: []
      });
    })
  }
}


