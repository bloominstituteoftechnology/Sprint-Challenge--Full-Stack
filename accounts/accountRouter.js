const express = require('express');

const Account = require('./AccountModel.js');
const statusCodes = require('../common/statusCodes.js');

const accountsRouter = express.Router();

accountsRouter.post('/', function(req, res) {
  const { name, description, budgetedAmount, isActive } = req.body;
  if (
    !name ||
    !description ||
    budgetedAmount === undefined ||
    isActive === undefined
  )
    res.status(statusCodes.userError).json({
      error: 'Must provide name, description,budgetedAmount, and isActive '
    });
  const newAccount = new Account(req.body);
  console.log('newAccount', newAccount);
  newAccount.save(function(err, account) {
    if (err) {
      res.status(statusCodes.userError).json({
        error: 'Database Server Error; could not create the account.'
      });
    } else {
      res.status(statusCodes.created).json(account);
    }
  });
});

accountsRouter.get('/', function(req, res) {
  Account.find({}, function(err, accounts) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: "Database Server error, can't get accounts" });
    } else {
      //console.log('accounts:', accounts)
      res.status(statusCodes.success).json(accounts);
    }
  });
});

accountsRouter.get('/:id', function(req, res) {
  const { id } = req.params;


  Account.findById(id, function(err, account) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'Could not find account' });
    } else {
      res.status(statusCodes.success).json(account);
    }
  });
});

accountsRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  Account.findByIdAndRemove(id, function(err, account) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'Could not find account to delete.' });
    } else {
      res.status(statusCodes.success).json(account);
    }
  });
});
accountsRouter.put('/:_id', function(req, res) {
  //console.log('req:', req)
  const { _id } = req.params;
  console.log('in put _id:', _id);
  const { name, description, budgetedAmount, isActive } = req.body;
  if (
    !(
      name &&
      description &&
      budgetedAmount !== undefined &&
      isActive !== undefined
    )
  ) {
    console.log(`Error 422 name: ${name} description: ${description} budgetedAmount: ${budgetedAmount} isActive: ${isActive} `);
    res.status(statusCodes.userError).json({
      error: 'Must provide name, description, budgetedAmount, and isActive '
    });
    return;
  }
  Account.findById(_id, function(err, account) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'Could not find account' });
    } else {
      console.log('put account found');
      console.log(`name: ${name} description: ${description} budgetedAmount: ${budgetedAmount} isActive: ${isActive} `);
      account.name = name;
      account.description = description;
      account.budgetedAmount = budgetedAmount;
      account.isActive = isActive;
      Account.update({ _id: _id }, account, (err, raw) => {
        if (err)
          res
            .status(statusCodes.serverError)
            .json({ error: `update failed: ${err}` });
        else res.status(statusCodes.success).json(raw);
      });
    }
  });
});
module.exports = accountsRouter;
