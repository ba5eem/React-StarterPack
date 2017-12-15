const axios = require('axios');


/*ACTIONS*/
export const CHANGE_MODE = 'CHANGE_MODE';

export const changeMode = (mode) => {
  return{
    type: CHANGE_MODE,
    payload: mode
  }
}


