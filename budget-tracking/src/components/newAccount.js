import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editAccount } from '../actions';

class newAccount extends Component {
  render() {
    let name, description, budgetedAmmount, isActive;
    let id = this.props.location.search.slice(1, 9e9);
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.editAccount(id, {
          name: name.value, 
          description: description.value, 
          budgetedAmmount: budgetedAmmount.value, 
          isActive: isActive.value,
        });
        // name.value = description.value = budgetedAmmount.value = '';
      }}>
        <input ref={node => name = node} />
        <input ref={node => description = node} />
        <input ref={node => budgetedAmmount = node} />
        <input ref={node => isActive = node} type="checkbox" name="isActive" defaultChecked/>
        <label htmlFor="isActive">Account is Active</label>
        <input type="submit" />
      </form>
    );
  }
}

export default connect(null, { editAccount })(newAccount);
