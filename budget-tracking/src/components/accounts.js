import React, { Component } from 'react';

import Account from './account.js';

class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
    };
  }
  componentDidMount() {
    const accounts = this.props.actions.getAccounts();
    this.setState({ accounts });
  }
  render() {
    return (
      <div className="accounts_container">
        <h1>List of Accounts</h1>
        <div className="accounts_list">
          {this.props.accounts.map((account, i) => (
            <Account 
              key={ account._id }
              id={ account._id }
              name={ account.name }
              description={ account.description }
              budget={ account.budgetedAmmount }
              isActive={ account.isActive }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Accounts;
