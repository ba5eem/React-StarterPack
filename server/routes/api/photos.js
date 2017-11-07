const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const _photos                 = express.Router();
const db                      = require('../models');
const {photos}                  = db;



_photos.get('/', ( req, res ) => {
  console.log('photos _photos has been requested: GET ');
  photo.findAll({raw:true})
  .then((DataCollection) => {
    console.log('photos _photos has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

_photos.get('/:id', ( req, res ) => {
  console.log('photos ID _photos has been requested: GET ');
  let id = req.params.id;
  console.log('photos.get/:id :', id);
  photo.findById(id)
  .then((data) => {
    console.log('photos ID _photos has been requested:, result: ', data);
    res.json(data);
  });
});

_photos.post('/new', ( req, res ) => {
  console.log('photos _photos has been requested: POST ');
  photo.create({
    title: req.body.title,
    url: req.body.url
  }).then((data) => {
    console.log('photos _photos has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

_photos.put('/:id', ( req, res ) => {
  console.log('photos ID _photos has been requested: PUT ');
  let id = req.params.id;
  console.log('photos.put/:id :', id);
  let data = req.body;
  return photo.update({
    title: req.body.title,
    url: req.body.url
  }, {where: {id:id}
  }).then((photo) => {
    res.json('photo updated');
  });
});

_photos.delete('/:id', ( req, res ) => {
  console.log('photos ID _photos has been requested: DELETE ');
  let id = req.params.id;
  console.log('photos.delete/:id :', id);
  let data = req.body;
  console.log('photos.delete/:id data :', data);
  photo.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('photos ID _photos has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = _photos;