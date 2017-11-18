import * as Actions from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case Actions.GET_ACCOUNTS:
      return action.payload.data;
    case Actions.DELETE_ACCOUNT:
        state = state.filter(account => account._id !== action.payload.data._id)
        return state
    case Actions.UPDATE_ACCOUNT:
      return state;
    default:
      return state;
  }
};
