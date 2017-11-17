const express = require('express');

const Accounts = require('./accountsModel.js');
// const statusCodes = require('../common/statusErrors.js');

const accountRouter = express.Router();

/* *** Accounts *** */
accountRouter.get('/', (req, res) => {
  Accounts.find({}, (err, accounts) => {
    if (err) res.status(500).send({ error: 'server error (temp err message)' });
    else res.status(200).send(accounts);
  });
});

accountRouter.get('/:id', (req, res) => {
  const { id } = req.params;
});

accountRouter.post('/new', (req, res) => {
  const newAccount = new Accounts(req.body);

  newAccount.save((err, account) => {
    if (err) res.status(422).send({ error: 'User error (temp err message)' });
    else res.status(201).send(account);
  });
});

accountRouter.put('/edit', (req, res) => {});

accountRouter.delete('/', (req, res) => {
  const { id } = req.body;
});

module.exports = accountRouter;