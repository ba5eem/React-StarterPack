//jshint esversion: 6
const express     = require('express');
const app         = express();
const indexRoute  = express.Router();
const _users      = require('./api/users.js');
const _albums     = require('./api/albums.js');
const _friends    = require('./api/friends.js');
const _interests  = require('./api/interests.js');
const _photos     = require('./api/photos.js');
const _login      = require('./api/login.js');
const _logout     = require('./api/logout.js');
const _register   = require('./api/register.js');

indexRoute.use('/users', _users);
indexRoute.use('/albums', _albums);
indexRoute.use('/friends', _friends);
indexRoute.use('/interests', _interests);
indexRoute.use('/photos', _photos);
indexRoute.use('/login', _login);
indexRoute.use('/logout', _logout);
indexRoute.use('/register', _register);


module.exports = indexRoute;