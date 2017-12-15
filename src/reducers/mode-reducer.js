import {CHANGE_MODE} from '../actions'


export default function(state=[], action){
  switch(action.type){
    case CHANGE_MODE:
      return action.payload;
    default:
      return state;
  }
}