import React, { Component } from 'react';
import {AppHeader,OptionButton,src,UploadButton} from './App-components';
import PhotoView from '../Photo';

class App extends Component {
  constructor(){
    super();

    this.state ={
      upload: false,
      file: '',
      url: '',
      photo: ''
    }
    this.upload=this.upload.bind(this);
    this.rotate=this.rotate.bind(this);
  }

  upload(e){
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        url: reader.result
      })
    }
    if(file){
      reader.readAsDataURL(file);
    }
    let elem = document.getElementsByClassName('photo-view-true');
    this.setState({photo: elem})
  }
  rotate(){
    let photo = this.state.photo;
    console.log(photo[0]);
    photo.style.transform = 'rotate(90deg)';

  }





  render() {
    
    return (
        <div className="app-container">
          <AppHeader/>
          <section className="main-section">
            <PhotoView src={this.state.url}/>
            <div className="options-bar">
              <UploadButton title='upload' handler={this.upload} src={src.upload}/>
              <OptionButton title='rotate' handler={this.rotate} src={src.rotate}/>
              <OptionButton title='enhance' src={src.enhance}/>
              <OptionButton title='crop' src={src.crop}/>
              <OptionButton title='retouch' src={src.retouch}/>
              <OptionButton title='effects' src={src.effects}/>
              <OptionButton title='undo' src={src.undo}/>
            </div>


          </section>


             




        </div>
    );
  }
}


export default App;