import React from 'react';
import { data } from '../../Utils/Constants';

export const Add = ({handler}) => {
  return (  <div onClick={handler} className="add-widget">
              <img src={data.addImage} alt="" className="add-widget-image"/>
            </div> 

    )
}