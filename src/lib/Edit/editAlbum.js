let local = {}

function editAlbum(e){
  console.log('edit method lib helper has been fired');

  if(e.target.name === 'title'){ local.title=e.target.value; }


  return local

}


export default editAlbum;



