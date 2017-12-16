import React from 'react';

export const src ={
  rotateLeft: "http://bit.ly/2AzmtLu",
  rotateRight: "http://bit.ly/2AzmtLu",
  rotateReset: "http://bit.ly/2kzgiAb",
  crop: "http://bit.ly/2B24Gh6",
  retouch: "http://bit.ly/2ClpErk",
  effects:"http://bit.ly/2j2UGMg",
  undo: "http://bit.ly/2B2zMVy"
}

export const Option = ({id,handle,src}) => (
  <div className="footer-buttons" onClick={()=>handle(id)}>
    <img id={id}  src={src} alt="icon"/>
  </div>
  )

export const Rotate = ({handler}) => (
            <div className="rotate-container">
              <Option id="rotateLeft" handle={handler} src={src.rotateLeft}/>
              <Option id="rotateReset" handle={handler} src={src.rotateReset}/>
              <Option id="rotateRight" handle={handler} src={src.rotateRight}/>
            </div>
      )

export const Filter = ({handler}) => (
            <div className="rotate-container">
              <Option id="rotateLeft" handle={handler} src={src.rotateLeft}/>
              
            </div>
      )