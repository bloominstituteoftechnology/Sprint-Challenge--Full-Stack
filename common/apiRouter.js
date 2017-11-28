const express = require('express');

const userRouter = require('../users/userRouter.js');
const budgetRouter = require('../budget/budgetRouter.js');

const api = express.Router();

api.use('/users', userRouter);
api.use('/budget', budgetRouter);

module.exports = api;
