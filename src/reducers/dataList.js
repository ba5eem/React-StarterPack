import { LOAD_DATA } from '../actions';

const dataList = (state = [],action) => { 
  
  switch (action.type){
    case LOAD_DATA:
      //console.log('LOAD_DATA has been activated: ',action.data);
      return action.data;

    default:
      return state;
  }
}

export default dataList;