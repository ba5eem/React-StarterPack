const express         = require('express');
const session         = require('express-session');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const passport        = require('passport');
const bcrypt          = require('bcrypt');
const routes          = require('./routes');
const path            = require('path');
const db              = require('./models');
const {users}         = db;
const Redis           = require('connect-redis')(session);
const LocalStrategy   = require('passport-local').Strategy;
const saltRounds      = 12;
var cors              = require('cors')
const PORT            = process.env.PORT || 3000;
const app             = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
//Authentication:
app.use(session({
  store: new Redis(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())
app.use('/api', routes);


passport.serializeUser((users,done) => {
  console.log("serializing");
  return done(null, {
    id: users.id,
    username: users.username
  });
});

passport.deserializeUser((users, done) => {
  console.log('deserializing');
  db.users.findOne({where: { id: users.id}})
  .then(user => {
    return done(null, {
      id: users.id,
      username: users.username
    });
  });
});

passport.use(new LocalStrategy(function(username, password, done) {
    db.users.findOne({where: { username: username } })
    .then( user => {
      if(user === null) {
        return done(null, false, {message: 'bad username or password'});
      }
      else {
        bcrypt.compare(password, user.password)
        .then (res => {
          console.log(res);
          if (res) {return done(null, user); }
          else {
            return done(null, false, {message: 'bad username or password'});
          }
        });
      }
    })
    .catch(err =>{
      console.error('error: ', err);
  });
}));


app.get('/', ( req, res ) =>{
  console.log('GET request on landing page has been made');
  res.json('Smoke Test');
});

app.get('*', ( req, res ) => {
  console.log('GET request on landing page has been made on * url');
  res.json('This page does not exist, change code to redirect on the request to your preffered landing page');
});

const server = app.listen(PORT,() => {
  db.sequelize.sync( { force: false } ); //this is to link with your DB defined in the config file - set to true to overwrite, set to false to not overwrite: 
  console.log(`You entered the Matrix on PORT: ${PORT}`);
});









