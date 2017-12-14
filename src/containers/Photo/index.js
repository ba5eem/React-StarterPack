import React, { Component } from 'react';
import {Footer,src} from '../App/App-components';


class PhotoView extends Component {
  constructor(props){
    super(props);

    this.state ={
      a:''
    }
  }









  render() {
    const view = this.props.src ? true : false;
    return (
        <div className="photo-container">
            <div className="photo-view">
              {!view ? 
              <img className="photo-view-false" src="http://bit.ly/2j1R4Kn" alt=""/>
              :
              <img className="photo-view-true" src={this.props.src} alt=""/>
              }
            </div>
            <Footer/>
        </div>
    );
  }
}


export default PhotoView;