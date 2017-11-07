const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const _albums                 = express.Router();
const db                      = require('../../models');
const {album}                 = db;



_albums.get('/', ( req, res ) => {
  console.log('albums _albums has been requested: GET ');
  album.findAll({raw:true})
  .then((DataCollection) => {
    console.log('albums _albums has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

_albums.get('/:id', ( req, res ) => {
  console.log('albums ID _albums has been requested: GET ');
  let id = req.params.id;
  console.log('albums.get/:id :', id);
  album.findById(id)
  .then((data) => {
    console.log('albums ID _albums has been requested:, result: ', data);
    res.json(data);
  });
});

_albums.post('/new', ( req, res ) => {
  console.log('albums _albums has been requested: POST ');
  album.create({
    title: req.body.title,
    url: req.body.url
  }).then((data) => {
    console.log('albums _albums has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

_albums.put('/:id', ( req, res ) => {
  console.log('albums ID _albums has been requested: PUT ');
  let id = req.params.id;
  console.log('albums.put/:id :', id);
  let data = req.body;
  return album.update({
    title: req.body.title,
    url: req.body.url
  }, {where: {id:id}
  }).then((album) => {
    res.json('album updated');
  });
});

_albums.delete('/:id', ( req, res ) => {
  console.log('albums ID _albums has been requested: DELETE ');
  let id = req.params.id;
  console.log('albums.delete/:id :', id);
  let data = req.body;
  console.log('albums.delete/:id data :', data);
  album.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('albums ID _albums has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = _albums;