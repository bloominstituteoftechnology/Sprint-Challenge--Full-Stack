const express = require('express');

const accountsRouter = require('../accounts/accountsRoutes.js');

const api = express.Router();

/* *** Routing *** */
api.use('/accounts', accountsRouter);

module.exports = api;