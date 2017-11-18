import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

const rootReducer = combineReducers({ accountReducer });

export default rootReducer;