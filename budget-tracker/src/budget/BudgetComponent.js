import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import axios from 'axios';


class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budget: []
    }
  }


  componentDidMount() {
    axios.get(`http://localhost:1234/api/budget/`).then(res => {
      this.setState({ 
        budget: res.data
      });
    });
}

handleSubmit = (event) => {
  event.preventDefault();
  const name = findDOMNode(this.refs.nameInput).value;
  const newName = {
      name
  };
  this.setState({
      budget: [...this.state.budget, newName]
  });
  findDOMNode(this.refs.nameInput).value = '';
};

  render() {
    return (
      <div>
        <h1>Budgets for User</h1>
        <ul>
          {this.state.budget.map(budget =>
            <ul key={budget._id}>
            <h3>{budget.name}</h3>
            <h3>{budget.key}</h3>
            <ul><strong>Decription:</strong> {budget.description}</ul>
            <ul><strong>Budget Amount:</strong> ${budget.budgetAmount}</ul>
            </ul>
          )}
        </ul>
        <div className="budgetName-input">
          <input type="text" placeholder="Input New Budget" ref="nameInput" />
              {' '}
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Budget;