import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAccounts, getAccount, addAccount, editAccount, deleteAccount, } from '../actions';
import Accounts from './accounts.js';

const mapStateToProps = (state) => {
  return {
    accounts: state.accountReducer,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { 
    actions: bindActionCreators({ 
      getAccounts,
      /*
      getAccount,
      addAccount,
      editAccount,
      */
      deleteAccount,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);