import * as Actions from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case Actions.GET_ACCOUNTS:
      return action.payload.data;
    case Actions.UPDATE_ACCOUNT:
      return state;
    default:
      return state;
  }
};
