import { GET_USERLIST, ADD_USER } from '../actions'

export default (userList = [], action) => {
  switch (action.type) {
    case GET_USERLIST:
      return action.payload.data;
    case ADD_USER: 
      return action.payload.data;
    default:
      return userList;
  }
};