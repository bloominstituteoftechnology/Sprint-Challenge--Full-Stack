import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { bindActionCreators } from 'redux';

class CreateAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      budgetedAmount: ""
    };
    this.addItem = this.addItem.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
  }

  addItem(event) {
    event.preventDefault();
    const item = {
      name: this.state.name,
      description: this.state.description,
      budgetedAmount: parseInt(this.state.budgetedAmount, 10)
    };
    this.props.addItem(item);
    this.setState({
      name: "",
      description: "",
      budgetedAmount: ""
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

  updateAmount(event) {
    this.setState({
      budgetedAmount: event.target.value
    });
  }

  render() {
    return (
      <div className="AccountForm">
        <form onSubmit={this.addItem}>
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
            onChange={this.updateAmount}
            placeholder="amount"
            value={this.state.budgetedAmount}
          />
          <button type="submit">Add New Account</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addItem }, dispatch);
};  

export default connect(null, mapDispatchToProps)(CreateAccount);