import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData,addData } from '../../actions/photos';
import PhotoList from './comps/PhotoList.js';


class Photo extends Component {
  constructor(props) {
    super(props);
    
    this.state={ 
      title: '',
      file: '',
      imageUrl: ''
    }

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() { this.props.loadData(); }

    handleChangeName(event){
    this.setState({
      title: event.target.value
    })
  }

  handleChangeImage(event){
    event.preventDefault();
    let reader = new FileReader();

    let file = event.target.files[0];
    console.log(file);

    reader.onloadend = () => {
      console.log(file);
      console.log(reader.result);
      this.setState({
        file: file,
        imageUrl: reader.result
      })
    }
    console.log(file);
    console.log(this.state.imageUrl);
    reader.readAsDataURL(file);
  }

  handleSubmit(event){
    event.preventDefault();

    let formData = new FormData();

    formData.append('file', this.state.file);
    formData.append('title', this.state.title);


    this.props.addData(formData);

  }






  render(){
    return (
        <div>
         <div>
          <u><h1>New Photo</h1></u>

          <form onSubmit={this.handleSubmit}>
          Title: <input 
            type="text" 
            value={this.state.name}
            onChange={this.handleChangeName}/>
          <br/>
          <br/>

          <div id="upload-image-form">
            Image:
            <input 
              type="file" 
              id="image-upload" 
              value={this.state.image} 
              placeholder="Image" 
              onChange={this.handleChangeImage}/>

            <div id="uploaded-image-preview">
              <img 
                alt="Preview" 
                src={this.state.imageUrl} />
            </div>
            <br/>
          <input type="submit" className="button" value="Add Photo"/>
          </div>
          </form>

          







          </div>
          <div className="App">
            <PhotoList 
              photos={this.props.data}/>
          </div>

        </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    data: state.photoList
  }
}

const ConnectedPhoto = connect(
  mapStateToProps,
  {loadData,addData}
)(Photo)

export default ConnectedPhoto;