import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions';
import { data } from '../../Utils/Constants';


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







  render(){
    return (

        <div className="App">
          {data.map((elem,i) =>{
            return (<p key={i}>{elem.genre} : {elem.code}</p>)
          })}
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