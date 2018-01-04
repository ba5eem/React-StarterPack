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
      value: '',
      max: false,
      taken: false
    }
    this.showInput=this.showInput.bind(this);
    this.saveInput=this.saveInput.bind(this);
  }

  

  saveInput(e){
    let value = e.target.value;
    if(value.length > 30){
      this.setState({max: true})
    }else{this.setState({max: false})}
    this.setState({value: value})
    
  }

  
  showInput(){
    let {value} = this.state;
    this.setState({show: !this.state.show})
    this.setState({src: !this.state.src})
    if(!this.state.src && value.length !== 0){
      this.props.addIdea(this.state.value);
      this.setState({max: false})
    }

  }





  render(){
    const src = this.state.src ? add : done;
    const {taken} = this.state;
    const charLimit = "remember to write...your idea in 30 characters or less";

    return (

        <div className="header-container">
          <Add src={src} handler={this.showInput}/>
          {this.state.show ?
          <div className="input" id="input">
            <input type="text" placeholder="...add new idea" onChange={this.saveInput} className="idea-input"/>
            {this.state.max ?
              <p className="max">{charLimit}</p>
            : 
              <p className="max" style={{backgroundColor: "#458985",color: "#458985"}}>20 characters or less</p>
                }
          </div>
          : null }
          <div>
            <h1 className="title">Digital Brainstorming Clipboard</h1>
              <h2 className="title">move ideas around if you like...</h2>
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