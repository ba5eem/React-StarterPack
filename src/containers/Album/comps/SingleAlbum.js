import React from 'react';

const SingleAlbum = ({album,edit,auth,editNow,backToAlbums,handleChange}) => {
  return (
      <div className="App">
          <button onClick={(e)=>backToAlbums(e)}>Back</button>
        {!edit ?
          <form >
            <h1>ID{album ? album[0].id : null}</h1>
            <h2>Title {album ? album[0].title : null}</h2>
            <img src={album ? album[0].avatar : null} alt=""></img>
            <h3>createdAt{album ? album[0].createdAt : null}</h3>
            <h3>updatedAt{album ? album[0].updatedAt : null}</h3>
            <h3>userId{album ? album[0].userId : null}</h3>
          </form>
        : <form >
            <input 
              type="text" 
              name='title'
              placeholder={album[0].title}
              onChange={handleChange}/>
          </form>}
          {auth ? 
            <button 
              onClick={(e)=>editNow(album,e)}>
              {edit ? 'SUBMIT' : 'EDIT'}</button> : null}
      </div>
      )
}

export default SingleAlbum;