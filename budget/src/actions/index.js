import axios from 'axios';

export const GET_ACCOUNTS = "GET_ACCOUNTS";
export const ADD_ACCOUNT = "ADD_ACCOUNT";

export const getList = () => {
    const endpoint = 'http://localhost:5000/api'; 
    const list = axios.get(endpoint);
    return {
        type: GET_ACCOUNTS,
        payload: list,
    };
}

export const addItem = (item) => {
    const promise = axios.post('http://localhost:5000/api/new', item);
    return {
        type: ADD_ACCOUNT,
        payload: promise,
    };
}
