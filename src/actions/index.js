export const REMOVE_CARD = 'REMOVE_CARD';
export const UPDATE_TITLE = "UPDATE_TITLE";
export const ADD_CARD = "ADD_CARD";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const UNDO_REMOVE = "UNDO_REMOVE";
export const UPDATE_PRIORITY = "UPDATE_PRIORITY";


export const loadData = () => {
  console.log("ola")
}


export const removeCard = (card) => {
  return{
    type: REMOVE_CARD,
    payload: card
  }
}

export const updateTitle = (newText,card) => {
  card.title = newText;
  return{
    type: UPDATE_TITLE,
    payload: card
  }
}

export const addCard = (value) => {
  return{
    type: ADD_CARD,
    payload: value
  }
}

export const updateStatus = (newStatus,card) => {
  
  card.status = newStatus;
  return{
    type: UPDATE_STATUS,
    payload: card
  }
}

export const updatePriority = (card) => {
  return{
    type: UPDATE_PRIORITY,
    payload: card
  }
}

export const undoRemove = (card) => {
  return{
    type: UNDO_REMOVE,
    payload: card
  }
}