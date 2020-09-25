const express = require("express");
const path = require("path");
const open = require("open");

import { database } from './database.js';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

const port = 8001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
database.insert({name: "dan", status: "happy"})
app.post('/', (request, response) => {
  console.log('I got a request!');
  console.log(request.body);
  const data = request.body;
  database.push(data);
})
/*
database.insert({
    "date": addLogInput_day, 
    "note": addLogInput_note, 
    "link": addLogInput_url
  });
*/
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/src/index.html'));
});
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
    database.loadDatabase();
  }
});
