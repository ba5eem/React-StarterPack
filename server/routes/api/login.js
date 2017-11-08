const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const _login                  = express.Router();
const db                      = require('../../models');
const {users}                 = db;

//LOGIN ROUTE
_login.get('/',(req,res)=>{
  let value = req.isAuthenticated();
  console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  console.log("REQ.USER***********************",req.user);

  return res.json((req.user ? req.user : 'Welcome to login page, no one is logged in right now'));
});

_login.post('/',isAuthenticated, function(req, res, next) {
  console.log(req.body);
  let local = {}
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }//send fail message - logged in false //some error reason
    if (!user) { return res.json('false - not a user'); }
    req.logIn(user, function(err) {
      if (err) { 
        local.auth = false;
        return res.json(); 
      }

      local.id = req.user.id;
      local.username = req.user.username;
      local.auth = true;
      return res.json(local);
    });
  })(req, res, next);
});



function isAuthenticated(req, res, next){
    req.isAuthenticated();
    next();

}

module.exports = _login;