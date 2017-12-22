function filter(arr,pred){

  const data = arr.filter((elem,pred) => {
  return elem.pred === 'argument';  
});
  return data;
}


export default filter;