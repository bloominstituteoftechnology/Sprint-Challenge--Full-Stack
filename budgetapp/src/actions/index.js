import axios from 'axios';

export const GET_USERLIST = 'GET_USERLIST';
export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = (userData) => {
  const promise = axios.post('http://localhost:5000/api/users', userData);
  return {
    type: ADD_USER,
    payload: promise
  }
}
export const getUserList = () => {
  const promise = axios.get('http://localhost:5000/api/users');
  return {
    type: GET_USERLIST,
    payload: promise
  };
};
export const getUser = (id) => {
  const promise = axios.get(`http://localhost:5000/api/users/${id}`);
  return {
    type: GET_USER,
    payload: promise
  };
};
export const deleteUser = (id) => {
  const promise = axios.delete('http://localhost:5000/api/users/', {
    data: {
      id
    }
  });
  return {
    type: DELETE_USER,
    payload: promise
  };
};

