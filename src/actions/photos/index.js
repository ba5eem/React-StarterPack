import httpRequest from '../../lib/httpRequest';
const axios = require('axios');
/*URI ROUTES for HTTP REQUEST*/
const _photos = 'photos';
/*HTTP METHODS*/
const GET = 'GET';
const PUT = 'PUT';
const DEL = 'DELETE';
/*ACTIONS*/
export const LOAD_PHOTOS = 'LOAD_PHOTOS';
export const ADD_DATA = 'ADD_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const DELETE_DATA = 'DELETE_DATA';


export const loadData = (data) => {
  //console.log('PHOTOS ACTION loadData has been Activated: ',data);
  return function(dispatch){
    return httpRequest(GET,_photos,null, function(err,data){
      //console.log('ACTION loadData before dispatch: ',data);
      dispatch({
        type: LOAD_PHOTOS,
        data: data
      })
    })
  }
}

export const addData = (data) => {
  return function(dispatch){
    return axios.post('http://localhost:3000/api/photos', data)
    .then( data => {
      dispatch({
        type: ADD_DATA,
        data: data
      });
    });
  }
}

export const editData = (data) => {
  console.log('ACTION editData has been Activated: ',data);
  return function(dispatch){
    return httpRequest(PUT,_photos+'/'+data.id,data,data, function(err,data){
      console.log('ACTION editData before dispatch: ',data);
      dispatch({
        type: EDIT_DATA,
        data: data
      })
    })
  }
}

export const deleteData = (data) => {
  console.log('ACTION deleteData has been Activated: ',data);
  return function(dispatch){
    return httpRequest(DEL,_photos+'/'+data.id,data,data, function(err,data){
      console.log('ACTION deleteData before dispatch: ',data);
      dispatch({
        type: DELETE_DATA,
        data: data
      })
    })
  }
}