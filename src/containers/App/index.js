import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadData from '../../actions';
import { arr, dropHere, changeSrc } from './Utils';


class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      arr: arr,
      url: '',
      moveUrl: ''
    }
  }


  componentWillMount() {
    this.props.loadData();
  }

  drag(e,url){
    this.setState({url})
  }

  move(e){
    let url = e.target.src;
    this.setState({url})
  }

  onDrop(e,idx){
    let {arr} = this.state;
    let res = changeSrc(idx,this.state.url)
    this.setState({arr:res})
  }

  onDragOver(e){
    e.preventDefault();
  }

  postIg(e){
    console.log("postIg")
  }


  




  render(){
    let {data} = this.props.data;
    let {arr} = this.state; 
    return (

        <div className="App">
         <div className="side_section">
          {data.map((elem,i) =>{
            let {url} = elem.images.low_resolution;
            let {width} = elem.images.low_resolution;
            let {height} = elem.images.low_resolution;
            return(
              <div 
                url={url} 
                className="ig_list" 
                key={i} 
                draggable='true' 
                onDrag={(e)=>this.drag(e,url)}
                onDragOver={(e)=>this.onDragOver(e)} 
                onDrop={(e)=>this.onDrop(e,url)}>
                <img style={{width:width, height: height}} src={url} alt=""/>
              </div>
              )
          })}
         </div>
         <div className="main">
          <div className="header">
            <h1>My Favorite 9</h1>
          </div>
          <div className="template">
            {arr.map((elem,i) =>{
              return (
                <div 
                  className="nine_boxes"
                  key={i} 
                  draggable='false'
                  onDrag={(e)=>this.move(e,i)}
                  onDragOver={(e)=>this.onDragOver(e,i)} 
                  onDrop={(e)=>this.onDrop(e,i)}>

                  <img src={elem.src} alt="" className="drophere"/>
                </div>
                )
            })}
          </div>
          <div className="post" onClick={this.postIg}>post</div>
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