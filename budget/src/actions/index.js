import axios from 'axios';

export const GET_BUDGETS = "GET_BUDGETS";
export const ADD_BUDGET = "ADD_BUDGET";
export const PUT_BUDGET = "PUT_BUDGET";
export const DELETE_BUDGET = "DELETE_BUDGET";

export const getBudgets = () => {
    const promise = axios.get('http://localhost:3002/budgets');
    return {
        type: GET_BUDGETS,
        payload: promise
    };
};

export const addBudget = (budget) => {
    const promise = axios.post('http://localhost:3002/budgetadd', budget);
    return {
        type: ADD_BUDGET,
        payload: promise
    };
};

export const putBudget = (budget) => {
    const promise = axios.put('http://localhost:3002/budgets', budget);
    return {
        type: PUT_BUDGET,
        payload: promise
    };
};

export const deleteBudget = (budget) => {
    const promise = axios.delete('http://localhost:3002/:id', budget);
    return {
        type: DELETE_BUDGET,
        payload: promise
    };
};