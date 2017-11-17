import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import UserIDReducer from './UserIDReducer';

const rootReducer = combineReducers({
  userList: UserReducer,
  selectedUser: UserIDReducer,
});

export default rootReducer