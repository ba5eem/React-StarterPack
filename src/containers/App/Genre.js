import React, { Component } from 'react';
import { url } from "../../Utils/Constants";


class Genre extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }






  render(){
    const elem = this.props.elem;
    return (
      <a href={url+elem.code}>
        <div className="genre">
          <p className="title">{elem.genre}</p>
        </div>
      </a>
    );
  }
}



export default Genre;