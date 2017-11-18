import React, { Component } from 'react';
import Budget from './BudgetComponent.js';

class BudgetContainer extends Component {
  constructor(props) {
     super(props);
    }
    render() {
      return (
        <div className="budget-container">
          <Budget name={this.props.budget.name} /> 
        </div>
        );
      }
    }

export default BudgetContainer;