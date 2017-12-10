import React, { Component } from 'react';
import { connect } from 'react-redux';






class CardDetail extends Component {


 

  render(){
    if(!this.props.card){
      return (<h4>Select a user...</h4>);
    }

    const deets = this.props.card;

    return(
      <div>
        <h2>{deets.assignee}</h2>
        <img src={deets.assigneeImg}/>
        <h2>{deets.priority}</h2>
        <h2>{deets.status}</h2>
      </div>


      )
  }
}

function mapStateToProps(state){
  return {
    card: state.activeCard
  }
}


export default connect(mapStateToProps)(CardDetail);
