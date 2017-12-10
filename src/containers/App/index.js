import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectCard} from '../../actions';
import CardDetail from './CardDetail';





class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      data:[]
    }

  }



  creatListItems(){
    return this.props.cards.map((card,i) =>{
      return (

        <div 
          style={{backgroundColor: 'lightgreen',margin: 20}} 
          onClick={()=>this.props.selectCard(card)}
          key={i}>
          {card.title}
        </div>


        )
    })
  }

 

  render(){
    const active = this.props.activeCard
    return(
      <div className="app-container">
        <h1 style={{color: 'blue'}}>Card Titles</h1>
          {this.creatListItems()}
        <h1 style={{color: 'blue'}}>Card Details</h1>
        <CardDetail/>
      </div>


      )
  }
}

function mapStateToProps(state){
  return {
    cards: state.cards
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectCard: selectCard}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(App);
