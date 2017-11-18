//import React from 'react';
import { connect } from 'react-redux';
import Accounts from './Accounts'
import {getAccounts, updateAccount} from '../actions'
const mapStateToProps = (state) => {
    return {
      accounts: state.accounts
    }
  }
  /*
  const MoviesContainer = () => {
    return (
      <Movies />
    );
  }
  */
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchAccounts: () => dispatch(getAccounts()),
      modifyAccount: (account) =>  dispatch(updateAccount(account))     
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps )(Accounts);


