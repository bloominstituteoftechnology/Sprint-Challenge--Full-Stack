import { GET_USER, DELETE_USER } from '../actions';

export default (selectedUser = null, action) => {
  switch(action.type) {
    case GET_USER: 
      return action.payload.data;
    case DELETE_USER:
      return action.payload.data;
    default:
      return selectedUser;
  }
};