import React from 'react';

export const src ={
  upload: "http://bit.ly/2zczk8b",
  rotate: "http://bit.ly/2kr4Czs",
  enhance: "http://bit.ly/2C8mExy",
  crop: "http://bit.ly/2B24Gh6",
  retouch: "http://bit.ly/2ClpErk",
  effects:"http://bit.ly/2j2UGMg",
  undo: "http://bit.ly/2B2zMVy"
}



export const AppHeader = () => <header className="app-header"><img src="http://bit.ly/2j1R4Kn"/></header>;


export const UploadButton = ({title,src,handler}) => (
            <div className="options-button">
            
              <div className="options-img">
                <img src={src} alt="icon" className="options-img"/>
              </div>
              <div className="options-title">
              <label for="file" id="image-upload">
                <p className="title">upload</p>
              </label>
              <input type="file" accept="image/*" id="file" onChange={handler}/>

              </div>
            </div>
      )


export const OptionButton = ({title,src,handler}) => (
            <div className="options-button" onClick={handler}>
              <div className="options-img">
                <img src={src} alt="icon" className="options-img"/>
              </div>
              <div className="options-title">
                <p className="title">{title}</p>
              </div>
            </div>
      )

export const Footer = () => (
          <footer className="share-options"></footer>

  )