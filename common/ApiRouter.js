const express = require('express');
const UserRouter = require('../User/UserRouter.js');
const api = express.Router();

api.use('/users', UserRouter);

module.exports = api;