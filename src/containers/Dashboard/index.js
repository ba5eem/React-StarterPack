import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions';
import { WeatherWidget } from './dashboard.components';
import './dashboard.css';




class Dashboard extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }








  render(){
    return (

        <div className="dashboard-container">
          <WeatherWidget/>
        </div>

    );
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}


export default connect(mapStateToProps,{loadData})(Dashboard);