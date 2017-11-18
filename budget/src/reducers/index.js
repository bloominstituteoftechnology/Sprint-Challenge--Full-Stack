import { combineReducers } from 'redux';
import { GET_ACCOUNTS, ADD_ACCOUNT, EDIT_ACCOUNT, DELETE_ACCOUNT } from '../actions';

const accountsReducer = (accounts = [], action) => {
  switch(action.type) {
    case GET_ACCOUNTS:
    case ADD_ACCOUNT:
    case EDIT_ACCOUNT:
    case DELETE_ACCOUNT:
      return action.payload.data;
    default:
      return accounts;
  }
};

const rootReducer = combineReducers({
  accounts: accountsReducer,
});

export default rootReducer;