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
    let {url} = elem.images.low_resolution;
    let {width} = elem.images.low_resolution;
    let {height} = elem.images.low_resolution;
    return(
        <div className="ig_list" key={i}>
          <img style={{width:width, height: height}} src={url} alt=""/>
        </div>
      )
  }

  renderBoxes(elem,i){
    return (
        <div className="nine_boxes" key={i}>
          <img src="http://bit.ly/2CH7JMA" alt="" className="drophere"/>
        </div>
      )
  }





  render(){
    let {data} = this.props.data;
    let arr = new Array(9).fill('i');
    return (

        <div className="App">
         <div className="side_section">
          {data.map(this.renderPhotos)}
         </div>
         <div className="main">
          <div className="header">
            <h1>My Favorite 9</h1>
          </div>
          <div className="template">
            {arr.map(this.renderBoxes)}
          </div>
         </div>
          
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