import React, { Component } from "react";
import { connect } from "react-redux";
import { getBudgets, addBudget } from "../actions";

class BudgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      budgetedAmount: "",
      isActive: ""
    };
    this.newBudget = this.newBudget.bind(this);
    }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  updateBudgetedAmount(event) {
    this.setState({
      budgetedAmount: event.target.value
    });
  }

  newBudget(event) {
    event.preventDefault();
    const newBudget = {
      name: this.state.name,
      description: this.state.description,
      budgetedAmount: this.state.budgetedAmount
    };
    this.props.addBudget(newBudget);
    this.setState({
      name: "",
      description: "",
      budgetedAmount: ""
    });
  }

  updateBudget = event => {
    event.preventDefault();

    const found = this.props.budgets.filter(Budget => Budget.name === this.state.name)[0]
    const data =
      {
        name: this.state.name,
        description: this.state.description,
        budgetedAmount: this.state.budgetedAmount,
        id: found.id
      };
    this.props.updateBudget(data);
    this.setState({
      name: "",
      description: "",
      budgetedAmount: ""
    });
  }

  render() {
    return (
      <div className="BudgetForm">
        <form onSubmit={this.addBudget}>
          <input
            onChange={this.updateName}
            placeholder="Name"
            value={this.state.name}
          />
          <input
            onChange={this.updateDescription}
            placeholder="Description"
            value={this.state.description}
          />
          <input
            onChange={this.updateBudgetedAmount}
            placeholder="$1.00"
            value={this.state.budgetedAmount}
          />
          <button onClick={this.newBudget}>Add To The Budget</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    budgets: state.budgets
  };
};

export default connect(mapStateToProps, { getBudgets, addBudget })(BudgetForm);
