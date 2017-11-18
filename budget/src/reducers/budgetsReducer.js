import {
    GET_BUDGETS,
    ADD_BUDGET,
    PUT_BUDGET,
    DELETE_BUDGET
  } from '../actions';
  
  
  const budgetsReducer = (budgets = [], action) => {
    switch (action.type) {
      case GET_BUDGETS:
        return action.payload.data;
      case ADD_BUDGET:
        return action.payload.data;
      case PUT_BUDGET:
        return action.payload.data;
      case DELETE_BUDGET:
        return action.payload.data;  
      default:
        return budgets;
    }
  };
  export default budgetsReducer;