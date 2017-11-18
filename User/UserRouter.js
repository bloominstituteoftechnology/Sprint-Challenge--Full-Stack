const express = require('express');
const UserModel = require('./UserModel.js');
const StatusCode = require('../common/StatusCodes.js');

const UserRouter = express.Router();

UserRouter.post('/', (req, res) => {
  const newUser = new UserModel(req.body);
  newUser.save((err, user) => {
    if(err) {
      res.status(StatusCode.userError).json({ error : `Could not create User`});
    } else {
      res.status(StatusCode.created).json(user);
    }
  });
});
UserRouter.get('/', (req, res) => {
  UserModel.find({}, (err, user) => {
    if(err) {
      res.status(StatusCode.userError).json({ error: `Could not find user list`});
    } else {
      res.status(StatusCode.success).json(user);
    }
  });
});
UserRouter.get('/', (req, res) => {
  const { id } = req.params;
  UserModel.findById(id, (err, user) => {
    if(err) {
      res.status(StatusCode.userError).json({ error: 'Could not find user id'});
    } else {
      res.status(StatusCode.success).json(user);
    }
  });
});
UserRouter.delete('.', (req, res) => {
  const { id } = req.params;
  UserModel.findByIdAndRemove(id, (err, user) => {
    if(err) {
      res.status(StatusCode.userError).json({ error: 'Could not find user id'});
    } else {
      res.status(StatusCode.success).json(user);
    }
  });
});

module.exports = UserRouter;