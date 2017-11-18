const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const accountRouter = require('./account/accountRouter.js');

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use('/api/accounts', accountRouter);

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/accounts', { useMongoClient: true})
  .then(function(db) {
    console.log('Welcome to the Databases of Moria.');
    server.listen(3223, function() {
      console.log('Database running on port 3223.');
    });
  })
  .catch(function(err) {
    console.log('Database connection failed. Moria is closed to you.', err.message);
  });