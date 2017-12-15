import { combineReducers } from 'redux';
import ChangeMode from './mode-reducer.js';



export default combineReducers({
  mode: ChangeMode
})