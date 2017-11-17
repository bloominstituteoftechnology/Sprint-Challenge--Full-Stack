const express = require('express');

const accounts = require('./accountsModel.js');
// const statusCodes = require('../common/statusErrors.js');

const accountRouter = express.Router();

/* *** Accounts *** */
accountRouter.get('/', (req, res) => {});
accountRouter.get('/:id', (req, res) => {
  const { id } = req.params;
});
accountRouter.post('/new', (req, res) => {});
accountRouter.put('/edit', (req, res) => {});
accountRouter.delete('/', (req, res) => {
  const { id } = req.body;
});

module.exports = accountRouter;