import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccounts, deleteAccount, editAccount } from '../actions';
// import Form

class AccountsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      update: false,
      id: NaN,
    };
  }
  componentDidMount() {
    this.props.getAccounts();
  }
  render() {
    return (
      <div>
        Hello!
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps, { getAccounts, deleteAccount, editAccount})(AccountsList);