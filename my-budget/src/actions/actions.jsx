import axios from 'axios';

export const GET_ACCOUNTS = 'GET_ACCOUNTS';
export const GET_ACCOUNT = 'GET_ACCOUNT';
export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export const getAccounts = () => {
  const promise = axios.get('http://localhost:5003/accounts');
  return {
    type: GET_ACCOUNTS,
    payload: promise
  };
};
export const getAccount = _id => {
  const promise = axios.get('http://localhost:5003/accounts/' + _id);
  return {
    type: GET_ACCOUNT,
    payload: promise
  };
};

export const addAccount = account => {
  const promise = axios.post('http://localhost:5003/accounts', account);
  return {
    type: ADD_ACCOUNT,
    payload: promise
  };
};

export const updateAccount = account => {
  const promise = axios.put('http://localhost:5003/accounts/' + account._id, account);
  return {
    type: UPDATE_ACCOUNT,
    payload: promise
  };
};

export const deleteAccount = _id => {
  const promise = axios.delete('http://localhost:5003/accounts/' + _id);
  return {
    type: DELETE_ACCOUNT,
    payload: promise
  };
};
