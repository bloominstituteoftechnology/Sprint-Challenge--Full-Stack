import { connect } from 'react-redux';

import { getAccounts, deleteAccount, } from '../actions';
import Accounts from './accounts.js';

const mapStateToProps = (state) => {
  return {
    accounts: state.accountReducer,
  }
}

export default connect(mapStateToProps, { getAccounts, deleteAccount, })(Accounts);