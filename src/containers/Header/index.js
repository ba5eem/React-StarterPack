import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData, addCard } from '../../actions';
import { Add } from './header.components';

import './header.css';

class Header extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }

  






  render(){
    
    return (

        <div className="header-container">
          <Add handler={this.props.handler}/>
        </div>

    );
  }
} 

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}


export default connect(mapStateToProps,{loadData,addCard})(Header);