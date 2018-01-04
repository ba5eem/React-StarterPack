import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData, addCard } from '../../actions';
import { Header } from '../';
import { buildCanvas, updateRects } from './dashboard.components';
import './dashboard.css';




class Dashboard extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: [],
      canvas: undefined
    }

    this.addIdea=this.addIdea.bind(this);

  }

  componentDidMount() {
    let canvas = document.getElementById("canvas");
    this.setState({canvas})
    buildCanvas(canvas,this.props.data);
  }

  addIdea(value){
    this.props.addCard(value);
    updateRects(this.state.canvas,this.props.data);
  }









  render(){
    return (
        <div>
          <Header addIdea={this.addIdea}/>
          <div className="dashboard-container">
            <canvas id="canvas"></canvas>
          </div>
        </div>
    );
  }
} 

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}


export default connect(mapStateToProps,{loadData,addCard})(Dashboard);