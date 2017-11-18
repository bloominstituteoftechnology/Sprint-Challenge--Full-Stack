const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const apiRouter = require('./common/apiRouter.js');

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use('', apiRouter);

const AtlasMongoIUrl = 
'mongodb://LambdaDataManager:XPoCMUH4qMHINDKc@mongoi-shard-00-00-2ydlw.mongodb.net:27017,mongoi-shard-00-01-2ydlw.mongodb.net:27017,mongoi-shard-00-02-2ydlw.mongodb.net:27017/mongoi?ssl=true&replicaSet=mongoi-shard-0&authSource=admin';

mongoose.Promise = global.Promise;
mongoose
  .connect(AtlasMongoIUrl + '&collection=accounts', { useMongoClient: true })
  .then((db) => {
    console.log('All your databases are belong to us!');
    const port = 5003
    server.listen(port, function() {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(function(err) {
    console.log('Database connection failed', err.message);
  });
