const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const _users                  = express.Router();
const db                      = require('../../models');
const {users}                  = db;



_users.get('/', ( req, res ) => {
  console.log('users _users has been requested: GET ');
  users.findAll({raw:true})
  .then((DataCollection) => {
    res.json(DataCollection);
  });
});

_users.get('/:id', ( req, res ) => {
  console.log('users ID _users has been requested: GET ');
  let id = req.params.id;
  console.log('users.get/:id :', id);
  users.findById(id)
  .then((data) => {
    console.log('users ID _users has been requested:, result: ', data);
    res.json(data);
  });
});

_users.post('/new', ( req, res ) => {
  console.log('users _users has been requested: POST ');
  users.create({
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email,
    avatar   : req.body.avatar
  }).then((data) => {
    console.log('users _users has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

_users.put('/:id', ( req, res ) => {
  console.log('users ID _users has been requested: PUT ');
  let id = req.params.id;
  console.log('users.put/:id :', id);
  let data = req.body;
  return users.update({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    avatar   : req.body.avatar
 }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((user) => {
    res.json(user);
  });
});

_users.delete('/:id', ( req, res ) => {
  console.log('users ID _users has been requested: DELETE ');
  let id = req.params.id;
  console.log('users.delete/:id :', id);
  let data = req.body;
  console.log('users.delete/:id data :', data);
  users.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('users ID _users has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = _users;