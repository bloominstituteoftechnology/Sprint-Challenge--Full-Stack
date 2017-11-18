import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Budget from './Budget';

class Budgets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budgets: []
    };
  }

  componentDidMount() {
    const budgets = this.props.getBudgets();
    console.log(budgets)
    this.setState({
      budgets
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="Budgets">
        <h1>Budget Tracker</h1>
        <ul>
          { this.props.budgets.map((budget, i) => {
            return <Budget index={i} name={budget.name} description={budget.description} budgetedAmount={budget.budgetedAmount} isActive={budget.isActive} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Budgets;