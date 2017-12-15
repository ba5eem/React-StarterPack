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
    this.activeMode=this.activeMode.bind(this);
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

  activeMode(e){
    this.props.changeMode({mode: e.target.id})
  }





  render() {
    
    return (
        <div className="app-container">
          <AppHeader/>
          <section className="main-section">
            <PhotoView src={this.state.url}/>
            <div className="options-bar">
              <UploadButton title='upload' handler={this.upload} src={src.upload}/>
              <OptionButton title='rotate' handler={this.activeMode} src={src.rotate}/>
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