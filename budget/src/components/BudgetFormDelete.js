import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBudget } from '../actions';

class BudgetFormDelete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      budgetedAmount: '',
      isActive: ''
    };
    this.addBudget = this.addBudget.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateBudgetedAmount = this.updateBudgetedAmount.bind(this);
    this.updateIsActive = this.updateIsActive.bind(this);
  }

  addBudget(event) {
    event.preventDefault();
    this.props.addBudget(this.state);
    this.setState({
      name: '',
      description: '',
      budgetedAmount: '',
      isActive: ''
    });
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

  updateIsActive(event) {
    this.setState({
      isActive: event.target.value
    });
  }

  render() {
    return (
      <div className="BudgetForm">
        <form onSubmit={this.addBudget}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateDescription}
            placeholder="description"
            value={this.state.description}
          />
          <input
            onChange={this.updateBudgetedAmount}
            placeholder="Amount"
            value={this.state.budgetedAmount}
          />
          <input
            onChange={this.updateIsActive}
            placeholder="Active?"
            value={this.state.isActive}
          />
          <button type="submit">Delete This Budget</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    budgets: state.budgets
  };
};

export default connect(mapStateToProps, { addBudget })(BudgetFormDelete);