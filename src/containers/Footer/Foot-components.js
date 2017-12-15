import React from 'react';

export const src ={
  rotateLeft: "http://bit.ly/2AzmtLu",
  rotateRight: "http://bit.ly/2AzmtLu",
  enhance: "http://bit.ly/2C8mExy",
  crop: "http://bit.ly/2B24Gh6",
  retouch: "http://bit.ly/2ClpErk",
  effects:"http://bit.ly/2j2UGMg",
  undo: "http://bit.ly/2B2zMVy"
}

export const Option = ({id,handle,src}) => (
  <div className="footer-buttons">
    <img id={id} onClick={(e)=>handle(e)} src={src} alt="icon"/>
  </div>
  )

export const Rotate = ({handler}) => (
            <div className="rotate-container">
              <Option id="rotateLeft" handle={handler} src={src.rotateLeft}/>
              <Option id="rotateRight" handle={handler} src={src.rotateRight}/>
            </div>
      )