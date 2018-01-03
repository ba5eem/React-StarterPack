export function remove(payload,state){
  let res = state.filter((elem) =>{
      return elem.id !== payload.id;
  });
  return res;
}



export function archive(arr,i){
  return arr[i];
}

export function add(state){
  let res = state;
  let card = {
        x: 75 - 15,
        y: 50 - 15,
        width: 300,
        height: 300,
        fill: "yellow",
        isDragging: false
      }
  res.unshift(card);
  return res;
}



