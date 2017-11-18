//import React from 'react';
import { connect } from 'react-redux';
import Account from './Account'
import {getAccounts, addAccount} from '../actions'

const mapStateToProps = (state) => {
    return {
      account: state.account
    }
  }
  const mapDispatchToProps = (dispatch,ownProps) => {
    return {
      fetchAccounts: () => dispatch(getAccounts()),
      addAccount: (account) =>  dispatch(addAccount(account))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Account);
