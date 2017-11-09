import { LOAD_DATA, ADD_DATA, EDIT_DATA, DELETE_DATA } from '../actions/friends';

const friendList = (state = [],action) => { 

  switch (action.type){
    case LOAD_DATA:
      //console.log('LOAD_DATA has been activated: ',action.data);
      return action.data;
    case ADD_DATA:
      console.log('ADD_DATA has been activated: ',action.data);
      return [...state,action.data]
    case EDIT_DATA:
      let index = state.findIndex((data) => {
        return data.id === action.data[1].id
      });
      return [ ...(state.slice(0, index)), action.data[1], ...(state.slice((index + 1), state.length))];
    case DELETE_DATA:
      console.log('DELETE_DATA has been activated: ',action.data);
      return action.data;
    default:
      return state;
  }
}

export default friendList;