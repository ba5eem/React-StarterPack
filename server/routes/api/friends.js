const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const _friends                = express.Router();
const db                      = require('../../models');
const {friends}                = db;



_friends.get('/', ( req, res ) => {
  console.log('friends _friends has been requested: GET ');
  friends.findAll({raw:true})
  .then((DataCollection) => {
    console.log('friends _friends has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

_friends.get('/:id', ( req, res ) => {
  console.log('friends ID _friends has been requested: GET ');
  let id = req.params.id;
  console.log('friends.get/:id :', id);
  friends.findById(id)
  .then((data) => {
    console.log('friends ID _friends has been requested:, result: ', data);
    res.json(data);
  });
});

_friends.post('/new', ( req, res ) => {
  console.log('friends _friends has been requested: POST ');
  friends.create({
    title: req.body.title,
    url: req.body.url
  }).then((data) => {
    console.log('friends _friends has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

_friends.put('/:id', ( req, res ) => {
  console.log('friends ID _friends has been requested: PUT ');
  let id = req.params.id;
  console.log('friends.put/:id :', id);
  let data = req.body;
    return friends.update({
      title: req.body.title,
      url: req.body.url
    }, {where: {id:id}
    }).then((friend) => {
      res.json('friend updated');
  });
});

_friends.delete('/:id', ( req, res ) => {
  console.log('friends ID _friends has been requested: DELETE ');
  let id = req.params.id;
  console.log('friends.delete/:id :', id);
  let data = req.body;
  console.log('friends.delete/:id data :', data);
  friends.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('friends ID _friends has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = _friends;