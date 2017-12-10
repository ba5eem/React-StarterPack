import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import {data} from './data';
import {filter,remove,update,add,undo,status} from './helpers';
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      ready:filter(data,'status','ready'),
      progress:filter(data,'status','progress'),
      done:filter(data,'status','done'),
      undo:[],
      currentUser:'baseem'
    }
    this.eachCard=this.eachCard.bind(this);
    this.addCard=this.addCard.bind(this);
  }

  addCard(){
    this.setState({ready: add(this.state.ready)})
  }

  removeCard(i,status){
    this.setState({undo: undo(this.state[status],i)})
    this.setState({[status]: remove(this.state[status],i)})   
  }

  updateCard(newText,i,status){
    this.setState({[status]: update(this.state[status],i,newText)})
  }

  changeStatus(newStatus,prevStatus,i){
    this.setState({[newStatus]: status(this.state[newStatus],this.state[prevStatus],i,newStatus)})
  }


  eachCard(text,i){
    return(<Card 
              updateCard={this.updateCard.bind(this)}
              remove={this.removeCard.bind(this)}
              changeStatus={this.changeStatus.bind(this)}
              key={i}
              text={text} 
              index={i}></Card>)
  }




  render(){
    return(
      <div className="app-container">
      <TopMenu 
        user={this.state.currentUser}
        addCard={this.addCard} />
      <SideMenu />
        <div className="board-container">
        
          <div className="ready-container">  
            <h1 className="ready-header">Ready</h1>    
            {this.state.ready.map(this.eachCard)}
          </div>
          <div className="status-divider"></div>
          <div className="progress-container">
            <h1 className="progress-header">In-Progress</h1>
            {this.state.progress.map(this.eachCard)}
          </div>
          <div className="status-divider"></div>
          <div className="done-container">
            <h1 className="done-header">Done</h1>
            {this.state.done.map(this.eachCard)}
          </div>
        </div>
      </div>


      )
  }
}




const ConnectedApp = connect(
  null
)(App)

export default ConnectedApp;
