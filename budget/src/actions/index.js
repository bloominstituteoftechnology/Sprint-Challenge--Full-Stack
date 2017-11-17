import axios from 'axios';

export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const EDIT_ACCOUNT = 'EDIT_ACCOUNT';
export const GET_ACCOUNTS = 'GET_ACCOUNTS';

const url = 'http://localhost:3000/api';

export const addAccount = (newAccount) => {
  const endpoint = url + '/accounts';
  return axios.post(endpoint, newAccount)
    .then(getAccounts);
};

export const deleteAccount = (index) => {
  const endpoint = url + '/accounts';
  return axios.delete(endpoint, {data: { index, }})
    .then(getAccounts);
};

export const editAccount = (index, update) => {
  const endpoint = url + '/accounts';
  return axios.put(endpoint, { index, update, })
    .then(getAccounts);
};

export const getAccounts = () => {
  const endpoint = url + '/accounts';
  const accounts = axios.get(endpoint);

  return {
    type: GET_ACCOUNTS,
    payload: accounts,
  }
};