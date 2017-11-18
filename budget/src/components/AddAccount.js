import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccount } from '../actions';

class AddAccount extends Component {
  render() {
    let name, description, budget, isActive;
    return (
      <form onSubmit={data => {
        data.preventDefault();
        this.props.addAccount({
          name: name.value,
          description: description.value,
          budget: budget.value,
          isActive: isActive.value
        });
        name.value = description.value = '';
        budget = 0;
        isActive = true;
      }}>
        <input ref={ node => name = node } placeholder='Enter a name for the budget...'></input>
        <input ref={ node => description = node } placeholder='Enter a description for the budget...'></input>
        <input ref={ node => budget = node } placeholder='0.00'></input>
        <input ref={ node => isActive = node } placeholder='T'></input>
        <button type='submit'>submit</button>
      </form>
    );
  }
};

export default connect(null, { addAccount })(AddAccount);