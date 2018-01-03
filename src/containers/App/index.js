import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadData from '../../actions';

const dropHere = "http://bit.ly/2CH7JMA";
const arr = [
{id:"0", src: dropHere},
{id:"1", src: dropHere},
{id:"2", src: dropHere},
{id:"3", src: dropHere},
{id:"4", src: dropHere},
{id:"5", src: dropHere},
{id:"6", src: dropHere},
{id:"7", src: dropHere},
{id:"8", src: dropHere}]


class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      arr: arr,
      url: ''
    }

    this.onDrop=this.onDrop.bind(this);
    this.drag=this.drag.bind(this);
    this.onDragOver=this.onDragOver.bind(this);

  }


  componentWillMount() {
    this.props.loadData();
  }

  drag(e,url){
    this.setState({url})
  }

  onDrop(e,idx){
    let {arr} = this.state;
    let res = arr.filter((elem,i) => {
      if(parseInt(elem.id) === parseInt(idx)){
        elem.src = this.state.url;
      }
      return arr;
    })
    this.setState({arr:res})
  }

  onDragOver(e){
    e.preventDefault();
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
                  onDragOver={(e)=>this.onDragOver(e,i)} 
                  onDrop={(e)=>this.onDrop(e,i)}>

                  <img src={elem.src} alt="" className="drophere"/>
                </div>
                )
            })}
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