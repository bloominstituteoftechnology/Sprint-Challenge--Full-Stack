const express = require('express');

const User = require('./userModel.js');
const statusCodes = require('../common/statusCodes.js');

const userRouter = express.Router();

userRouter.post('/', function(req, res) {
  const newUser = new User(req.body);
  console.log(req.body);
  newUser.save(function(err, user) {
    if(err) {
      res.status(statusCodes.userError).json({ error: 'Did not meet all requirements; Please include a username and password' });
    } else {
      res.status(statusCodes.manifested).json(user);
    }
  });
});

userRouter.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if(err) {
      res.status(statusCodes.userError).json({ error: 'Could not retrieve and display users' });
    } else {
      res.status(statusCodes.ok).json(users);
    }
  });
});

userRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  User.findById(id, function(err, users) {
    if(err) {
      res.status(statusCodes.userError).json({ error: 'could not find user' });
    } else {
      res.status(statusCodes.ok).json(users)
    }
  });
});

userRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  User.findByIdAndRemove(id, function(err, users) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'Could not find user to delete.' });
    } else {
      res.status(statusCodes.success).json(users);
    }
  });
});

module.exports = userRouter;
