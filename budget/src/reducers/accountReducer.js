import { GET_ACCOUNTS, ADD_ACCOUNT } from '../actions';
  
 const accountReducer = (list = [], action) => {
    switch(action.type) {
        case GET_ACCOUNTS:
            return action.payload.data;
        case ADD_ACCOUNT:
            return action.payload.data;
        default:
            return list;
    }
}

export default accountReducer;