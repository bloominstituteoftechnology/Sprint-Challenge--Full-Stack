const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');

const apiRouter = require('./common/apiRouter.js');

server.use(bodyParser.json());
server.use(cors())

server.use('/api', apiRouter);

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost:27017/budgets',
  { useMongoClient: true }
).then(() => {
  const port = 5000;
  server.listen(port);
  console.log(`Server Listening on ${port}`);
}, (err) => {
  console.log("ERROR: Couldn't connect to MongoDB. Do you have it running?");  
});
