import React from 'react';

const NewPhoto = ({}) => {

  return (

      <div className="App">
          {albums.map((album,idx)=>{
            return (
              <div key={idx}>
                <h1>Id: {album.id}</h1>
                <span onClick={(e)=>loadAlbum(album.id,e)}><h2>Title: {album.title}</h2></span>
                <img src={album.avatar} alt=""></img>
                <h3>created: {album.createdAt}</h3>
                <h3>Updated: {album.updatedAt}</h3>
                <h3>UserId: {album.userId}</h3>
              </div>
              )
          })
        }
        </div>

    )//end of return
};

export default NewPhoto;