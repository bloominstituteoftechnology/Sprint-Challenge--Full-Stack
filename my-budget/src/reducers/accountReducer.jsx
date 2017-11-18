import * as Actions from '../actions'

export default (state ={}, action) => {
    if (action.payload) console.log('account reducer action payload.data',action.payload.data)
    switch(action.type) {
        case Actions.ADD_ACCOUNT:
            return action.payload.data
        default:
            return state
    }
}