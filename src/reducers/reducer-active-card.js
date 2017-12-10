

export default function(state=null, action){

  switch(action.type){
    case "CARD_SELECTED":
      return action.payload;
      break;
  }
  return state;
}