


const axios = require('axios');

export const LOAD_VIDEO = 'LOAD_VIDEO';


var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
export const loadVideo = () => {
  return function(dispatch){
    return axios.get('https://www.youtube.com/watch?v=P2Ht20R7qFU',{ crossdomain: true })
    .then( data => {
      console.log(data);
      dispatch({
        type: LOAD_VIDEO,
        payload: data
      });
    });
  }
}