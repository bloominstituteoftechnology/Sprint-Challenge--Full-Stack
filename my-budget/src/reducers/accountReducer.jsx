import * as Actions from '../actions'

export default (state =[], action) => {
    console.log('account action.type:', action.type)
    console.log('account state:', state);
    if (action.payload) console.log('account reducer action payload.data',action.payload.data)
    switch(action.type) {
        case Actions.ADD_ACCOUNT:
            state = [...state, action.payload.data]
            return state
        default:
            return state
    }
}