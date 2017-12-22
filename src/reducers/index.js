import { combineReducers } from 'redux';
import tempList from './tempList.js';


export default combineReducers({
  data: tempList
})