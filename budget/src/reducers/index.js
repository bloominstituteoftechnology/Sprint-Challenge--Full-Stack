import { combineReducers } from 'redux';
import budgets from './budgetsReducer';

const rootReducer = combineReducers({
  budgets
});

export default rootReducer;