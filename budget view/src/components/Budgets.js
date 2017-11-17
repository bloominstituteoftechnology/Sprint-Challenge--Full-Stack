import React, { Component } from 'react';

import Budget from './Budget';
import CheckBox from './CheckBox';

class Budgets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budgets: [],
      optionsChecked: [],
    };
  }

  componentDidMount() {
    const budgets = this.props.getBudgets();
    this.setState({
      budgets,
    });
  }

  changeEvent(event) {
    let checkedArray = this.state.optionsChecked;
    let selectedValue = event.target.value;

    if (event.target.checked === true) {
      checkedArray.push(selectedValue);
      this.setState({
        optionsChecked: checkedArray,
      });
    } else {
      let valueIndex = checkedArray.indexOf(selectedValue);
      checkedArray.splice(valueIndex, 1);

      this.setState({
        optionsChecked: checkedArray,
      });
    }
  }

  render() {
    let checkBoxArray = [''];
    return (
      <div className="Budgets">
        <ul>
          {
            this.props.budgets.map((budget, i) => {
            checkBoxArray.push(budget.budgetedAmount);
            return (
              <div className="Budgets-checked">
                <Budget
                  name={budget.name}
                  description={budget.description}
                  budgetedAmount={budget.budgetedAmount}
                  isActive={budget.isActive}
                  key={i}
                />
                
              </div>
            );
          })}
        </ul>
      </div>
    );
    { 
    let outputCheckboxes = checkBoxArray.map(function(string, i) {
      return (
        <div>
          <CheckBox
            value={string}
            id={'string_' + i}
            onChange={this.changeEvent.bind(this)}
          />
          <label htmlFor={'string_' + i}>{string}</label>
        </div>
      );
    }, this);
    return (
    <div>{outputCheckboxes}
    {JSON.stringify(this.state.optionsChecked)}</div>
    );
  }
  }
}

export default Budgets;
