import React, { Component } from 'react';
import {AppHeader,OptionButton,PhotoView,src} from './App-components';






class App extends Component {
  constructor(){
    super();

    this.state ={
      a:''
    }
  }









  render() {
    
    return (
        <div className="app-container">
          <AppHeader/>
          <section className="main-section">
            <PhotoView/>
            <div className="options-bar">
            <OptionButton title='upload' src={src.upload}/>
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