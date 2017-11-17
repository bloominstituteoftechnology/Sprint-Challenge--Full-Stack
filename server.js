const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

const server = express();

server.use(bodyParser.json());
server.use(cors());

/* *** Plumbing *** */
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017', { useMongoClient: true })
  .then((db) => {
    const port = 3666;
    console.log('All your databases belong to us!');
    server.listen(port, () => {
      console.log(`server running on port ${port}!`);
    });
  })
  .catch((err) => {
    console.log('database connection failed', err.message);
  });
