import axios from 'axios';

export const GET_BUDGETS = "GET_BUDGETS";
export const ADD_BUDGET = "ADD_BUDGET";
export const UPDATE_BUDGET = "UPDATE_BUDGET";
// export const DELETE_BUDGET = "DELETE_BUDGET";

export const getBudgets = () => {
    const promise = axios.get('http://localhost:3001/api/budgets');
    return {
        type: GET_BUDGETS,
        payload: promise
    };
};

export const addBudget = (budget) => {
    const promise = axios.post('http://localhost:3001/api/budgets', budget);
    return {
        type: ADD_BUDGET,
        payload: promise
    };
};

export const updateBudget = (budget) => {
    const promise = axios.put('http://localhost:3001/api/budgets', budget);
    return {
        type: UPDATE_BUDGET,
        payload: promise
    };
};

// export const deleteBudget = (id) => {
//     const promise = axios.delete('http://localhost:3001/api/budgets', {
//         data: {
//             id
//         }
//     });
//     return {
//         type: DELETE_BUDGET,
//         payload: promise
//     };
// };