const express = require('express');

const accountRouter = require('../accounts/accountRouter.js');


const api = express.Router();

api.use('/accounts', accountRouter);

module.exports = api;
