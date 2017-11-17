const express = require('express');

const Account = require('./AccountModel.js');
const statusCodes = require('../common/statusCodes.js');

const accountRouter = express.Router();

accountRouter.post('/', function(req, res) {
  const newAccount = new Account(req.body);
  newAccount.save(function(err, account) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({
          error: 'Insuffiencient data, could not create the account.',
        });
    } else {
      res.status(statusCodes.created).json(account);
    }
  });
});

accountRouter.get('/', function(req, res) {
  Account.find({}, function(err, accounts) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'Could not display all accounts'});
    } else {
      res.status(statusCodes.success).json(accounts);
    }
  });
});

module.exports = accountRouter;