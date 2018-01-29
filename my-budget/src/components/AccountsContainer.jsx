//import React from 'react';
import { connect } from 'react-redux';
import Accounts from './Accounts'
import {getAccounts, updateAccount, addAccount, deleteAccount} from '../actions'
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
      modifyAccount: (account) =>  dispatch(updateAccount(account)),
      deleteAccount: (_id) => dispatch(deleteAccount(_id)),    
      addAccount: (account) => dispatch(addAccount(account))    
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps )(Accounts);


