import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeMode} from '../../actions';
import {Rotate} from './Foot-components';
import {rotateHelper} from './helpers';


class Footer extends Component {
  constructor(props){
    super(props);

    this.state ={
      src:''
    }
    this.rotate=this.rotate.bind(this)
  }

  rotate(e){
    rotateHelper(e);
  }







  render() {
    let {mode} = this.props.mode;
    return (
            <footer className="footer">

              <Rotate handler={this.rotate}/>

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