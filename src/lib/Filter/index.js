function filter(arr,pred,query){
  const data = arr.filter((elem) => {
  return elem[pred] === parseInt(query);  
});

  return data;
}


export default filter;