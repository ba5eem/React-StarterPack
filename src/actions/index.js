import { FETCHING_DATA, FETCHING_DATA_SUCCESS,FETCHING_DATA_FAIL  } from './../Utils/ActionTypes';
import { apiKey } from '../keys.js';
const axios = require('axios');
const Promise = require('bluebird');

const stopID = 879;
const url = `http://api.thebus.org/arrivals/?key=${apiKey}&stop=${stopID}`;
const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};












export const loadData = () => {
  return function(dispatch){
    return axios.get(url, config)
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


