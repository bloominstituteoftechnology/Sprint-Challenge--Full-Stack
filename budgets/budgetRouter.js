const express = require('express');

const Budget = require('./BudgetModel.js');
const statusCodes = require('../common/statusCodes.js');

const budgetRouter = express.Router();

budgetRouter.post('/', function(req, res) {
  const newBudget = new Budget(req.body);

  newBudget.save(function(err, budget) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'Could not create new budget.' });
    } else {
      res.status(statusCodes.created).json(budget);
    }
  });
});

budgetRouter.get('/', function(req, res) {
  Budget.find({}, function(err, budgets) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'Could not retrieve all budgets.' });
    } else {
      res.status(statusCodes.success).json(budgets);
    }
  });
});

budgetRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  Budget.findById(id, function(err, budgets) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'Could not retrieve the specified budget.' });
    } else {
      res.status(statusCodes.success).json(budgets);
    }
  });
});

budgetRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  Budget.findByIdAndRemove(id, function(err, budget) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'Could not delete the specified budget.' });
    } else {
      res.status(statusCodes.success).json(`Budget ${id} removed.`);
    }
  });
});

module.exports = budgetRouter;
