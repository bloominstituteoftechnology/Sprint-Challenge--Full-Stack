import { GET_ACCOUNTS, GET_ACCOUNT, ADD_ACCOUNT, EDIT_ACCOUNT, DELETE_ACCOUNT, } from '../actions';

export default (accounts = [], action) => {
  switch (action.type) {
    case GET_ACCOUNTS:
    case GET_ACCOUNT:
    case ADD_ACCOUNT:
    case DELETE_ACCOUNT:
      return action.payload.data;
    default:
      return accounts;
  }
}