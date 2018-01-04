import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData, addCard } from '../../actions';
import { Add } from './header.components';
import { data } from '../../Utils/Constants';
import './header.css';

const add = data.addImage;
const done = data.done;

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state={ 
      data: [],
      show: false,
      src: true,
      value: ''
    }
    this.showInput=this.showInput.bind(this);
    this.saveInput=this.saveInput.bind(this);
  }

  

  saveInput(e){
    let value = e.target.value;
    if(value.length > 44){
      console.log('toolong')
    }
    this.setState({value: value})
    
  }

  
  showInput(){
    let {value} = this.state;
    this.setState({show: !this.state.show})
    this.setState({src: !this.state.src})
    if(!this.state.src && value.length !== 0){
      this.props.addIdea(this.state.value);
    }

  }





  render(){
    const src = this.state.src ? add : done
    
    return (

        <div className="header-container">
          <Add src={src} handler={this.showInput}/>
          {this.state.show ?
          <div className="input" id="input">
            <input type="text" placeholder="...add new idea" onChange={this.saveInput} className="idea-input"/>
          </div>
          : null }
          <div>
            <h1 className="title">Digital Brainstorming Clipboard</h1>
              <h2 className="title">move item around as you add...</h2>
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


export default connect(mapStateToProps,{loadData,addCard})(Header);