import { combineReducers } from 'redux';
import accounts from './accountsReducer';
import account from './accountReducer';

const rootReducer = combineReducers({
  accounts, account
});

export default rootReducer;