var express = require('express');
var app     = express();
const axios = require('axios');
var parseString = require('xml2js').parseString;
require('dotenv').config();

console.log(process.env.KEY);

const stopID = 883;
const apiKey = process.env.KEY;

const url = `http://api.thebus.org/arrivals/?key=${apiKey}&stop=`;


app.get('/bus/:id', (req,res) => {
  let all = []
  let id = req.params.id;
  axios(url+id).then((data) => {
    var xml = data.data;
    parseString(xml, function (err, result) {
    let body = result.stopTimes.arrival;
    let stop = result.stopTimes.stop;
    let x = body.map((elem,i) => {
      let local = {};
      local.stop = stop[0];
      local.id = elem.id[0];
      local.trip = elem.trip[0];
      local.route = elem.route[0];
      local.headsign = elem.headsign[0];
      local.vehicle = elem.vehicle[0];
      local.direction = elem.direction[0];
      local.stopTime = elem.stopTime[0];
      local.date = elem.date[0];
      local.canceled = elem.canceled[0];
      local.lat = elem.latitude[0];
      local.lng = elem.longitude[0];
      local.shape = elem.shape[0];
      all.push(local);
    })
  });
    res.json(all)
  })
})

app.listen('8080')

