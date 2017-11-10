const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const _albums                 = express.Router();
const db                      = require('../../models');
const {albums}                 = db;



_albums.get('/', ( req, res ) => {
  console.log('albums _albums has been requested: GET ');
  albums.findAll({raw:true})
  .then((DataCollection) => {
    res.json(DataCollection);
  });
});

_albums.get('/:id', ( req, res ) => {
  console.log('albums ID _albums has been requested: GET ');
  let id = req.params.id;
  console.log('albums.get/:id :', id);
  albums.findById(id)
  .then((data) => {
    console.log('albums ID _albums has been requested:, result: ', data);
    res.json(data);
  });
});

_albums.post('/new', ( req, res ) => {
  console.log('albums _albums has been requested: POST ');
  albums.create({
    title: req.body.title,
    avatar: req.body.avatar,
    userId: req.body.userId
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
  return albums.update({
    title: req.body.title,
    avatar: req.body.avatar,
    userId: req.body.userId
 }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((album) => {
    res.json(album);
  });
});

_albums.delete('/:id', ( req, res ) => {
  console.log('albums ID _albums has been requested: DELETE ');
  let id = req.params.id;
  console.log('albums.delete/:id :', id);
  let data = req.body;
  console.log('albums.delete/:id data :', data);
  albums.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('albums ID _albums has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = _albums;