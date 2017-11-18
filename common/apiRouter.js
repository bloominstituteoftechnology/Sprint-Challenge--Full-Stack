const express = require('express');

const Account = require('./AccountModel.js');
const statusCodes = require('./statusCodes.js');
const api = express.Router();

api.get('/', function(req, res) {
    Account.find({}, function(err, data) {
      if (err) {
        res
          .status(statusCodes.userError)
          .json({ error: 'Could not fetch data' });
      } else {
        res.status(statusCodes.success).json(data);
      }
    });
});

api.post('/new', function(req, res) {
    const newAccount = new Account(req.body);
    newAccount.save(function(err, data) {
      if (err) {
        res
          .status(statusCodes.userError)
          .json({
            error: 'Something unbearable happened; could not create the account.',
          });
      } else {
        res.status(statusCodes.created).json(data);
      }
    });
});

api.delete('/:id', function(req, res) {
  const { id } = req.params;

  Account.findByIdAndRemove(id, function(err, data) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'arrrrrrrr' });
    } else {
      res.status(statusCodes.success).json(data);
    }
  });
});

module.exports = api;
