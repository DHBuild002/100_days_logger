const express = require("express");
const path = require("path");
const open = require("open");

import webpack from 'webpack';
import config from '../webpack.config.dev.js';
import { database } from './database.js';

const port = 8001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/src/index.html', './database.js'));
});
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
    database.loadDatabase();
  }
});
