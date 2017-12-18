import {LOAD_VIDEO} from '../actions';

const data = (state = [],action) => { 
  //console.log("Reducer has been activated, current state: ", state)
  switch (action.type){
    case LOAD_VIDEO:
      return action.payload;
    default:
      return state;
  }
}

export default data;