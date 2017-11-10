import React from 'react';

const UserPhotos = ({photos}) => {


  return (
    <div>
      {photos.map((photo,idx) =>{
        return (
          <div key={idx}>
            <h3>Photo ID: {photo.id}</h3>
            <i><h4>TITLE: {photo.title}</h4></i>
            <img src={photo.file} />
            <h4>Album ID: {photo.albumId}</h4>
          </div>
          )
        })
      }
    </div>
  )
}

export default UserPhotos;