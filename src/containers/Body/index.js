import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions';


class Body extends Component {
  constructor() {
    super();
    
    this.state={ 
      weight: 0
    }
    this.weightChange=this.weightChange.bind(this);
  }


  weightChange(e){
    this.setState({weight: e.target.value})

  }





  render(){
    const {weight} = this.state;

    return (
        <div>
          <div className="main-section">
            <input type="text" onChange={this.weightChange} className="starting-weight" placeholder={weight}/>
          </div>
          <div className="results-container">
            <div className="results">
              <div className="percent">95%</div>
              <div className="result">{weight*.95}</div>
            </div>
            <div className="results">
              <div className="percent">90%</div>
              <div className="result">{weight*.9}</div>
            </div>
            <div className="results">
              <div className="percent">85%</div>
              <div className="result">{weight*.85}</div>
            </div>
            <div className="results">
              <div className="percent">80%</div>
              <div className="result">{weight*.8}</div>
            </div>
            <div className="results">
              <div className="percent">75%</div>
              <div className="result">{weight*.75}</div>
            </div>
            <div className="results">
              <div className="percent">70%</div>
              <div className="result">{weight*.7}</div>
            </div>
            <div className="results">
              <div className="percent">65%</div>
              <div className="result">{weight*.65}</div>
            </div>
            <div className="results">
              <div className="percent">60%</div>
              <div className="result">{weight*.6}</div>
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


export default connect(mapStateToProps,{loadData})(Body);