import React from 'react';
import UserPhotos from './UserPhotos';

const UserAlbums = ({albums}) => {

  return (<div>

          { albums.map((album,idx) => {
            return (
              <div key={idx}>
                <h3>Album ID: {album.id}</h3>
                <h1>TITLE: {album.title}</h1>
                  <div>
                    <i><UserPhotos 
                          photos={album.photos}
                         /></i>
                  </div>
                <img src={album.avatar}/>
                <h3>UserID: {album.userId}</h3>
              </div>
              )
          })
        }
        </div>
      )
};

export default UserAlbums;