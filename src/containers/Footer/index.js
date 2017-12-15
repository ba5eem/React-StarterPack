import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeMode} from '../../actions';
import {Rotate} from './Foot-components';


class Footer extends Component {
  constructor(props){
    super(props);

    this.state ={
      src:''
    }
    this.check=this.check.bind(this)
  }

  check(){
    console.log(this.props.src);
  }







  render() {
    let {mode} = this.props.mode;
    console.log(mode);
    return (
            <footer className="footer">

              <Rotate/>

            </footer>
        
    );
  }
}


const mapStateToProps = (state) => {
  return{
    mode: state.mode
  }
}

const ConnectedFooter = connect(
  mapStateToProps,
  {changeMode}
  )(Footer)

export default ConnectedFooter;