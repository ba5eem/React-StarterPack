import { combineReducers } from 'redux';
import busInfo from './busInfo.js';


export default combineReducers({
  bus: busInfo
})