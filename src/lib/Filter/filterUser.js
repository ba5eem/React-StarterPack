function filterUser(arr,query){
  console.log('filter method lib helper has been fired');
  const data = arr.filter((elem) => {
  return elem.id === query;  
});

  return data;
}


export default filterUser;