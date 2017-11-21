const express          = require('express');
const app              = express();
const passport         = require('passport');
const bcrypt           = require('bcrypt');
const LocalStrategy    = require('passport-local').Strategy;
const saltRounds       = 12;
const route            = express.Router();
const db               = require('../models');
const {user}           = db;

route.get('/', ( req, res ) => {
  let value = req.isAuthenticated();
  user.findAll()
  .then((users) => {
    let local = {};
    local.id = users.id;
    local.username = users.username;
    //VIP: only return user id and username
    //res.json(local);
    res.json(users);
  });
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  user.findById(id)
  .then((user) => {
    let local = {};
    local.id = user.id;
    local.username = user.username;
    //VIP: only return user id and username
    res.json(user);
  });
});

route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  let edited = req.body;

  return user.findById(id)
  .then((user) => {
    return user.update(edited,{
      returning: true,
      plain: true
    })
    .then((user)=>{
      let local = {};
      local.id = user.id;
      local.username = user.username;
      //VIP: only return user id and username
      return res.json(local);
    })
  })
})

route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  let data = req.body;

  return user.update({
    userstatus: 'inactive'
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((user) => {
      let local = {};
      local.id = user.id;
      local.username = user.username;
      //VIP: only return user id and username
    res.json(user);
  })
});


module.exports = route;