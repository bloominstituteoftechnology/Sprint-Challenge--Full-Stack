import {
    GET_BUDGETS,
    ADD_BUDGET,
    UPDATE_BUDGET
  } from '../actions';
  
  
  export default (budgets = [], action) => {
    switch(action.type) {
      case GET_BUDGETS:
          return action.payload.data;
      case ADD_BUDGET:
          return action.payload.data;
      case UPDATE_BUDGET:
        const newBudgets = budgets.slice(0);
        const found = newBudgets.filter(budget => {
          return budget.id === action.payload.data.id;
        });
        found.name = action.payload.data.name;
        found.description = action.payload.data.description;
        found.budgetedAmount = action.payload.data.budgetedAmount;
        return newBudgets;
  
      // case DELETE_BUDGET:
      //     return budgets.slice(0).filter(budget => {
      //     return budget.id !== action.payload.data.budgetRemoved.id;
      // });
      default:
          return budgets;
    }
  };