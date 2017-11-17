import axios from 'axios';

export const GET_ACCOUNTS = 'GET_ACCOUNTS';
export const GET_ACCOUNT = 'GET_ACCOUNT';
export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const EDIT_ACCOUNT = 'EDIT_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

const url = 'http://localhost:3666';

export const getAccounts = () => {
  const endpoint = `${url}/api/accounts`;
  const accounts = axios.get(endpoint);
  //console.log(accounts);
  return {
    type: GET_ACCOUNTS,
    payload: accounts,
  }
};
export const getAccount = (id) => {};
export const addAccount = (account) => {
  const endpoint = `${url}/api/accounts/add`;
  const newAccount = axios.post(endpoint, account)
    .then(getAccounts);

  return newAccount;
};
export const editAccount = (id, account) => {
  const endpoint = `${url}/api/accounts/edit/${id}`;
  const editAccount = axios.put(endpoint, account)
    .then(getAccounts);

  return editAccount;
};
export const deleteAccount = (id) => {};
