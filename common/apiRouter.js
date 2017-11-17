const express = require('express');

//const userRouter = require('../users/userRouter.js');
const budgetRouter = require('../budgets/budgetRouter.js');

const api = express.Router();

//api.use('/users', userRouter);
api.use('/budgets', budgetRouter);

module.exports = api;

// API endpoints //
