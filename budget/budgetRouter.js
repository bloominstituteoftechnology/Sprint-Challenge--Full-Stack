const express = require('express');

const Budget = require('./budgetModel.js');
const statusCodes = require('../common/statusCodes.js');

const budgetRouter = express.Router();

budgetRouter.post('/', function(req, res) {
  const newBudget = new Budget(req.body);
  
  newBudget.save(function(err, budget) {
    if(err) {
      res.status(statusCodes.userError).json({ error: 'Did not meet all requirements; Please include a name, decription, budgetAmount, and isActive' });
    } else {
      res.status(statusCodes.manifested).json(budget);
    }
  });
});

budgetRouter.get('/', function(req, res) {
  Budget.find({}, function(err, budgets) {
    if(err) {
      res.status(statusCodes.userError).json({ error: 'Could not retrieve and display users' });
    } else {
      res.status(statusCodes.ok).json(budgets);
    }
  });
});

budgetRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  Budget.findById(id, function(err, budgets) {
    if(err) {
      res.status(statusCodes.userError).json({ error: 'could not find user' });
    } else {
      res.status(statusCodes.ok).json(budgets)
    }
  });
});

budgetRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  Budget.findByIdAndRemove(id, function(err, budgets) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'Could not find user to delete.' });
    } else {
      res.status(statusCodes.success).json(budgets);
    }
  });
});

module.exports = budgetRouter;
