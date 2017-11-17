const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

const Budget = require("./BudgetModel.js");

const server = express();

server.use(bodyParser.json());
server.use(cors());

let name, description, budgetedAmount;

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/budgets", { useMongoClient: true })
  .then(function(db) {
    console.log("All your dbs belong to us!");
    server.listen(3002, function() {
      console.log("server running on port 3002");
    });
  })
  .catch(function(err) {
    console.log("DB connection failed..", err.message);
  });

server.post("/budgets", function(req, res) {
  const newBudget = new Budget(req.body);
  // do checks here to make sure the user has all the data
  if (
    newBudget.name === "" ||
    newBudget.description === "" ||
    newBudget.budgetedAmount === ""
  ) {
    res
      .status(STATUS_USER_ERROR)
      .json({ error: "Could not create budget due to missing fields" });
    return;
  } else {
    newBudget.save(function(err, budget) {
      if (err) {
        res
          .status(STATUS_SERVER_ERROR)
          .json({ error: "Could not create new budget." });
      } else {
        res.status(201).json(budget);
      }
    });
  }
});
server.get("/budgets", function(req, res) {
  Budget.find({}, function(err, budgets) {
    if (err) {
      res
        .status(STATUS_SERVER_ERROR)
        .json({ error: "Could not retrieve budgets" });
    } else {
      res.status(200).json(budgets);
    }
  });
});
server.get("/budgets/:id", function(req, res) {
  const { id } = req.params;
  Budget.findById(id, function(err, budgets) {
    if (err) {
      res.status(STATUS_USER_ERROR).json({ error: "Could not retrieve budget" });
    } else {
      res.status(200).json(budgets);
    }
  });
});
//delete budget
server.delete("/budgets/:id", function(req, res) {
  const { id } = req.params;
  Budget.findByIdAndRemove(id, function(err, budgets) {
    if (err) {
      res.status(STATUS_USER_ERROR).json({ error: "Could not delete budget" });
    } else {
      res.status(200).json({ Success: "Budget has been deleted!"});
    }
  });
});
