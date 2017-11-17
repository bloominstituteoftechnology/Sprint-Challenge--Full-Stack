import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addAccount } from '../actions';

class NewAccount extends Component {
  render() {
    let name, description, budgetedAmmount, isActive;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.addAccount({
          name: name.value,
          description: description.value, 
          budgetedAmmount: budgetedAmmount.value, 
          isActive: isActive.value,
        });
        window.location.href='/';
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

export default connect(null, { addAccount })(NewAccount);