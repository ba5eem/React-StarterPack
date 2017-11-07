import { combineReducers } from 'redux';
import userList from './userList.js';
import photoList from './photoList.js';
import interestList from './interestList.js';
import friendList from './friendList.js';
import albumList from './albumList.js';


export default combineReducers({
  userList,
  photoList,
  interestList,
  friendList,
  albumList
})