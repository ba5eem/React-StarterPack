import React, { Component } from 'react';
import {AppHeader,OptionButton,src,UploadButton} from './App-components';
import PhotoView from '../Photo';






class App extends Component {
  constructor(){
    super();

    this.state ={
      upload: false,
      file: '',
      imageUrl: ''
    }
    this.upload=this.upload.bind(this);
  }


  upload(event){
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result
      })
    }
    reader.readAsDataURL(file);
  }





  render() {
    
    return (
        <div className="app-container">
          <AppHeader/>
          <section className="main-section">
            <PhotoView src={this.state.imageUrl}/>
            <div className="options-bar">
              <UploadButton title='upload' handler={this.upload} src={src.upload}/>
              <OptionButton title='rotate' src={src.rotate}/>
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