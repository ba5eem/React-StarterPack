import React, { Component } from 'react';
import {loadVideo} from '../../actions';
import { connect } from 'react-redux';


const x = {backgroundColor: 'cornflowerblue'};
const y = {backgroundColor: 'salmon'};

const arr = new Array(11).fill(x);
const Box = ({change,ref,i,elem}) => <div id={i} onClick={change} className="box" style={elem}></div>

class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      arr: arr,
      count: 0,
      id: 0
    }
    this.eachBox=this.eachBox.bind(this);
    this.change=this.change.bind(this);
    //this.runChange=this.runChange.bind(this);
  }



  componentWillMount() {
    this.props.loadVideo()
  }

  change(e){
    let id = e.target.id;
    this.setState({id:id})
    this.runChange() 
  }

  runChange(){
    this.changeDown(this.state.id);
    this.changeUp(this.state.id);

  }

  changeDown(id){
    let n = this.state.count;
    setTimeout(() => {
      id --
      this.setState({ count: id });
      arr[this.state.count] = y;
      this.setState({arr:arr})
      if(this.state.count === 0){
        return;
      }else { this.runChange() }
      }, 1500)


  }
  changeUp(id){
    let n = this.state.count;
    setTimeout(() => {
      id ++
      this.setState({ count: id });
      arr[this.state.count] = y;
      this.setState({arr:arr})
      }, 1500)

  }







  eachBox(elem,i){
    return(<Box key={i} i={i} elem={elem} change={this.change}/>)
  }




  render(){
    let {arr} = this.state;
    return (

        <div className="App">
          {arr.map(this.eachBox)}


        </div>
      
    )
  }
} 


const mapStateToProps = (state) => {
  return {
    artworks: state.artworks
    }
}

const ConnectedApp = connect(
  mapStateToProps,
  {loadVideo}
)(App)


export default ConnectedApp;