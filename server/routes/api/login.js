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

  return res.json((req.user ? req.user : 'Welcome to login page, no one is logged in right now'));
});

_login.post('/',isAuthenticated, function(req, res, next) {
  console.log(req.body)
  let local = {}
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }//send fail message - logged in false //some error reason
    if (!user) { 
      return 
        local.id = 'undefined';
        local.username = 'undefined';
        local.auth = false;
        return res.json(local);  }
    req.logIn(user, function(err) {
      if (err) { 
        local.id = 'undefined';
        local.username = 'undefined';
        local.auth = false;
        return res.json(local); 
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