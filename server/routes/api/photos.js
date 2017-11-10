const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const _photos                 = express.Router();
const db                      = require('../../models');
const {photos}                = db;
const multer                  = require('multer');

const storage = multer.diskStorage({
  destination: './uploads',
  filename(req,file,cb){
    cb(null, `${file.originalname}`);
  }
})
const upload = multer({storage});

_photos.get('/', ( req, res ) => {
  //console.log('photos _photos has been requested: GET ');
  photos.findAll({raw:true})
  .then((DataCollection) => {
    //console.log('photos _photos has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});



_photos.post('/', upload.single('file'), ( req, res ) => {
  let file = req.file;
  console.log('file: ',(file ? file : 'Its undefined'));
  photos.create({
    title : req.body.title,
    file   : req.file.path,
    albumId : 4
  }).then((data) => {
      return photos.findOne({
        where: {
          id: data.id
        }
      })
    .then((item) => {
      return res.json(item);
    })
  })
  .catch((err) => {
    console.log(err)
  })
});

_photos.get('/:id', ( req, res ) => {
  console.log('photos ID _photos has been requested: GET ');
  let id = req.params.id;
  console.log('photos.get/:id :', id);
  photos.findById(id)
  .then((data) => {
    console.log('photos ID _photos has been requested:, result: ', data);
    res.json(data);
  });
});

_photos.put('/:id', ( req, res ) => {
  console.log('photos ID _photos has been requested: PUT ');
  let id = req.params.id;
  console.log('photos.put/:id :', id);
  let data = req.body;
  return photos.update({
    title: req.body.title,
    url: req.body.url,
    albumId: req.body.albumId
  }, {where: {id:id}
 }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((photo) => {
    res.json(photo);
  });
});

_photos.delete('/:id', ( req, res ) => {
  console.log('photos ID _photos has been requested: DELETE ');
  let id = req.params.id;
  console.log('photos.delete/:id :', id);
  let data = req.body;
  console.log('photos.delete/:id data :', data);
  photos.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('photos ID _photos has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = _photos;