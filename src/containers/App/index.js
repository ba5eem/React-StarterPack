import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadData from '../../actions';


class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }


  componentWillMount() {
    this.props.loadData();
  }

  renderPhotos(elem,i){
    let src = elem.images.low_resolution.url;
    let width = elem.images.low_resolution.width;
    let height = elem.images.low_resolution.height;
    return(
        <div className="ig_list" key={i}>
          <img style={{width:width, height: height}} src={src} alt=""/>
        </div>


      )
  }





  render(){
    let {data} = this.props.data;
    return (

        <div className="App">
          {data.map(this.renderPhotos)}
        </div>

    );
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}


export default connect(mapStateToProps,{loadData})(App);