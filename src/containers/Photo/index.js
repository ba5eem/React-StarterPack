import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/photos';
import PhotoList from './comps/PhotoList.js';


class Photo extends Component {
  constructor() {
    super();
    
    this.state={ 
      title: '',
      url: ''
    }
  }

  componentDidMount() { this.props.loadData(); }

  






  render(){
    return (
        <div className="App">
          <PhotoList 
            photos={this.props.data}/>
        </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    data: state.photoList
  }
}

const ConnectedPhoto = connect(
  mapStateToProps,
  {loadData}
)(Photo)

export default ConnectedPhoto;