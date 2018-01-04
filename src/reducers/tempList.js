import {
  ADD_CARD
  } from '../actions'
import { rects } from '../Utils/Constants';
import { add } from './helpers';

export default function(state=rects, action){
  switch(action.type){
    case ADD_CARD:
      return [...add(state,action.payload)];
    default:
      return state;
  }
}