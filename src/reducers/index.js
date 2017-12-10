import { combineReducers } from 'redux';
import cardReducer from './cardReducer.js';
import ActiveCardReducer from './reducer-active-card';


export default combineReducers({
  cards: cardReducer,
  activeCard: ActiveCardReducer
})