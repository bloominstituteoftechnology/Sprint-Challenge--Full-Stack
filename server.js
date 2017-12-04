const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const apiRouter = require('./common/apiRouter.js');

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use('/api', apiRouter);

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/users', { useMongoClient: true })
  .then(function (db) {
    console.log('The database is good and ready to roll!');
    server.listen(1234, function () {
      console.log('Server running on port 1234');
    });
  })
  .catch(function (err) {
    console.log('Database connection failed', err.message);
  });