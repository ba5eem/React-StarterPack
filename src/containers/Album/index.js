import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData,editData } from '../../actions/albums';
import AlbumList from './comps/AlbumList.js';
import SingleAlbum from './comps/SingleAlbum.js';
import filterUser from '../../lib/Filter/filterUser';
import editAlbum from '../../lib/Edit/editAlbum.js';

class Album extends Component {
  constructor() {
    super();
    
    this.state={ 
      album: '',
      edit:false,
      auth:true
    }
  }

  componentDidMount() { this.props.loadData(); }

  handleChange(e){ editAlbum(e); }

  loadAlbum(id,e){ this.setState({album: filterUser(this.props.data,id)}); }

  backToAlbums(e){
    e.preventDefault();
    this.setState({user: null});
  }
  editNow(album,e){
    let editedAlbum = editAlbum(e);
    this.setState({album: album, edit: true});
    if(this.state.edit){
      editedAlbum.id = album[0].id;
      this.props.editData(editedAlbum);
      this.setState({album: null, edit: false});
    }
  }





  render(){
    const album = this.state.album;
    return (

        <div className="App">
          {album ?
            <SingleAlbum
              edit={this.state.edit}
              auth={this.state.auth}
              editNow={this.editNow.bind(this)}
              backToAlbums={this.backToAlbums.bind(this)}
              handleChange={this.handleChange.bind(this)}
              album={this.state.album} />
            :
            <AlbumList
              loadAlbum={this.loadAlbum.bind(this)}
              albums={this.props.data} />
          }
        </div>

    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    data: state.albumList
  }
}

const ConnectedAlbum = connect(
  mapStateToProps,
  {loadData,editData}
)(Album)

export default ConnectedAlbum;