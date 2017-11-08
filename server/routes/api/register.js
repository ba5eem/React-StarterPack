const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const _register               = express.Router();
const db                      = require('../../models');
const {users}                  = db;

//REGISTER ROUTE
_register.get('/',(req,res)=>{
  res.json('Welcome to the api Registration page');
});

_register.post('/', (req,res) =>{
  bcrypt.genSalt(saltRounds, function(err,salt){
    bcrypt.hash(req.body.password, salt, function(err, hash){
      db.users.create({
        username: req.body.username,
        password: hash,
        email: 'email@test-db-test-email.io',
        avatar: 'http://bit.ly/2zHt8Xi'
      })
      .then( (user) => {
        console.log(user);
        res.json('user successfully added');
      })
      .catch((err) => {
        return res.json('Username has been taken'); 
      });
    });
  });
});


module.exports = _register;