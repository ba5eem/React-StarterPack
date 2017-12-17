import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeMode} from '../../actions';
import {Rotate,Filter} from './Foot-components';
import {rotateHelper} from './helpers';


class Footer extends Component {
  constructor(props){
    super(props);

    this.state ={
      src:''
    }
    this.rotate=this.rotate.bind(this)
    this.filter=this.filter.bind(this)
  }

  rotate(e){
    rotateHelper(e);
  }
  filter(e){
    let id = e.target.id;
    this.props.changeFilter(id);
  }







  render() {
    let {mode} = this.props.mode;
    let {src} = this.props;
    return (
            <footer className="footer">
              {mode === 'rotate' ? <Rotate handler={this.rotate}/> : null }
              {mode === 'filter' ? <Filter src={src} handler={this.filter}/> : null }
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