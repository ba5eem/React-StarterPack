import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeMode} from '../../actions';
import {src} from '../App/App-components';
import Footer from '../Footer';


class PhotoView extends Component {
  constructor(props){
    super(props);

    this.state ={
      src:''
    }
    this.check=this.check.bind(this)
  }

  check(){
    console.log(this.props.src);
  }







  render() {
    let {mode} = this.props;
    const view = this.props.src ? true : false;
    return (
        <div className="photo-container" onClick={this.check}>
            <div className="photo-view" id="photo-view">
              {view ? 
              <img className="photo-view-false"  src="http://bit.ly/2j1R4Kn" alt=""/>
              :
              <img className="photo-view-true" id="photo-view-true" src="https://i.ytimg.com/vi/exxji9vqjSw/maxresdefault.jpg" alt=""/>
              }
            </div>
            <Footer/>
        </div>
        
    );
  }
}


const mapStateToProps = (state) => {
  return{
    mode: state.mode
  }
}

const ConnectedPhotoView = connect(
  mapStateToProps,
  {changeMode}
  )(PhotoView)

export default ConnectedPhotoView;