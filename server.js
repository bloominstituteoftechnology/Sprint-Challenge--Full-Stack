const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ApiRouter = require('./common/ApiRouter.js')

const server = express();
server.use(bodyParser.json());
server.use(cors());

server.use('/api', ApiRouter);

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost:27017/',
  { useMongoClient: true}
)

connect.then(() => {
  const port = 5000;
  server.listen(port);
  console.log(`Server is listening on ${port}`);
}, (err) => {
  console.log(`\n*****************`);
  console.log(`Error: Could not connect to MongoDB. Check to see if it is running`);
  console.log(`*****************\n`);
}
)