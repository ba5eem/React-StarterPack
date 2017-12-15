import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeMode} from '../../actions';
import {AppHeader,OptionButton,src,UploadButton,Footer} from './App-components';
import PhotoView from '../Photo';
import Cropper from 'cropperjs';
import {reSizeOnImport} from './helpers'

class App extends Component {
  constructor(){
    super();

    this.state ={
      upload: false,
      file: '',
      url: '',
      photo: '',
      mode: false
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
  }

  componentDidMount() {
    reSizeOnImport();
  }

  rotate(){
    this.props.changeMode({mode: 'rotate'})
    var image = document.getElementById('photo-view-true');
    var view = document.getElementById('photo-view');
    let VW = view.clientWidth;//778
    let VH = view.clientHeight;//480
    let mSide = VW - image.height;
    let ML = mSide/2;
    let deg = 90;
    image.style.transform = 'rotate('+deg+'deg)';
    image.width = VH-30;
    image.style.marginLeft = ML+'px';
    console.log(image.width);

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

const mapStateToProps = (state) => {
  return{
    mode: state.mode
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  {changeMode}
  )(App)

export default ConnectedApp;