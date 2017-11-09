import React from 'react';

const PhotoList = ({photos}) => {

  return (

      <div className="App">
          {photos.map((data,idx)=>{
            return (
              <div key={idx}>
              <h1>Id{data.id}</h1>
              <h2>Title{data.title}</h2>
              <img src={data.url} alt=""></img>
              <h3>created:{data.createdAt}</h3>
              <h3>Updated:{data.updatedAt}</h3>
              <h3>AlbumId: {data.albumId}</h3>
              </div>
              )
          })
        }
        </div>

    )//end of return
};

export default PhotoList;