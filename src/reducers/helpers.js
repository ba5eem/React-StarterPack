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
        x: 20,
        y: 50,
        width: 300,
        height: 100,
        fill: "#074358",
        isDragging: false
      }
  res.unshift(card);
  return res;
}



