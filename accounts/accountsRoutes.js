const express = require('express');

const Accounts = require('./accountsModel.js');
// const statusCodes = require('../common/statusErrors.js');

const accountRouter = express.Router();

/* *** Accounts *** */
accountRouter.get('/', (req, res) => {
  Accounts.find({}, (err, accounts) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(accounts);
  });
});

accountRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  Accounts.findById(id, (err, account) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(account);
  });
});

accountRouter.post('/new', (req, res) => {
  const newAccount = new Accounts(req.body);
  
  // if account.budgetedAmmount is not a number return;

  newAccount.save((err, account) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(account);
  });
});

accountRouter.put('/edit/:id', (req, res) => {
  const { id } = req.params;
  const updateAcc = req.body;
  
  // if account.budgetedAmmount is not a number return;

  Accounts.findById(id, (err, account) => {
    if (err) res.status(500).send(err);
    if (!account) res.status(404).send('Not Found');
    account.name = updateAcc.name || account.name;
    account.description = updateAcc.description || account.description;
    account.budgetedAmmount = updateAcc.budgetedAmmount || account.budgetedAmmount;
    account.isActive = updateAcc.isActive;

    account.save((error, acc) => {
      if (error) res.status(500).send(err);
      else res.status(200).send(acc);
    });
  })
});

accountRouter.delete('/', (req, res) => {
  const { id } = req.body;
});

module.exports = accountRouter;