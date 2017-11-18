import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, getUserList, deleteUser } from '../actions';

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      budgetAmount: '',
      isActive: '',
      id: ''
    }
  }
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };
  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    });
  };
  handleBudgetChange = (e) => {
    this.setState({
      budgetAmount: e.target.value
    });
  };
  newUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      description: this.state.description,
      budgetAmount: this.state.budgetAmount,
    }
    this.props.addUser(newUser);
    this.setState({
      name: '',
      description: '',
      budgetAmount: '',
      isActive: '',
      id: '',
    });
  };
  deleteUser = (e) => {
    e.preventDefault();
    if(!this.state.id) {
      return;
    }
    this.props.deleteUser(this.state.id);
    this.setState({
      name: '',
      description: '',
      budgetAmount: '',
      isActive: '',
      id: '',
    });
  };
  render() {
    return(
      <div>
        <input value = {this.state.name} onChange = {this.handleNameChange} placeholder = 'Name'/>
        <input value = {this.state.description} onChange = {this.handleDescriptionChange} placeholder = 'Description'/>
        <input value = {this.state.budgetAmount} onChange = {this.handleBudgetChange} placeholder = 'BudgetAmount'/>
        <button onClick = {this.newUser}> Add User </button>
        <button onClick = {this.deleteUser}> Delete User </button>
      </div>
    );
  }
}

export default connect(null, { addUser, deleteUser, getUserList })(AddUser);