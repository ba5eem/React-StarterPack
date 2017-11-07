const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const _interests              = express.Router();
const db                      = require('../../models');
const {interests}              = db;



_interests.get('/', ( req, res ) => {
  console.log('interests _interests has been requested: GET ');
  interests.findAll({raw:true})
  .then((DataCollection) => {
    console.log('interests _interests has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

_interests.get('/:id', ( req, res ) => {
  console.log('interests ID _interests has been requested: GET ');
  let id = req.params.id;
  console.log('interests.get/:id :', id);
  interests.findById(id)
  .then((data) => {
    console.log('interests ID _interests has been requested:, result: ', data);
    res.json(data);
  });
});

_interests.post('/new', ( req, res ) => {
  console.log('interests _interests has been requested: POST ');
  interests.create({
    title: req.body.title,
    url: req.body.url
  }).then((data) => {
    console.log('interests _interests has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

_interests.put('/:id', ( req, res ) => {
  console.log('interests ID _interests has been requested: PUT ');
  let id = req.params.id;
  console.log('interests.put/:id :', id);
  let data = req.body;
  return interests.update({
    title: req.body.title,
    url: req.body.url
  }, {where: {id:id}
  }).then((interest) => {
    res.json('interest updated');
  });
});

_interests.delete('/:id', ( req, res ) => {
  console.log('interests ID _interests has been requested: DELETE ');
  let id = req.params.id;
  console.log('interests.delete/:id :', id);
  let data = req.body;
  console.log('interests.delete/:id data :', data);
  interests.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('interests ID _interests has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = _interests;