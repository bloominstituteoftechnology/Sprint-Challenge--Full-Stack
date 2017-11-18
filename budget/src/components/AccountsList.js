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
        {this.props.accounts.map((account, i) => {
          return (
            <div>
              {Object.keys(account).map((key, i) => {
                return (
                  <div key={i}>
                    {`${key}: ${account[key]}`}
                  </div>
                )
              })}
            </div>
          );
        })}
        <Form update={ this.state.update } id={ this.state.id } inputFunction={ this.props.editAccount } />
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