import * as Actions from '../actions';

export default (state = [], action) => {
  console.log('accounts action.type:', action.type)
  console.log('accounts state:', state);
  if (action.payload) console.log('accounts reducer action payload.data',action.payload.data)
  switch (action.type) {
    case Actions.GET_ACCOUNTS:
      return action.payload.data;
    case Actions.DELETE_ACCOUNT:
      state = state.filter(account => account._id !== action.payload.data._id);
      return state;
    case Actions.UPDATE_ACCOUNT:
      return state;
    default:
      return state;
  }
};
