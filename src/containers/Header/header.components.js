import React from 'react';
import { data } from '../../Utils/Constants';

export const Add = ({handler,src}) => {
  return (  <div onClick={handler} className="add-widget">
              <img src={src} alt="" className="add-widget-image"/>
            </div> 

    )
}