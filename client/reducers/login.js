import { combineReducers } from 'redux'

function login(state = {
    isFetching: false
}, action) {
    console.log(action);
    switch (action.type) {
        case 'FIND_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'FIND_RESPONSE':
            return Object.assign({}, state, {
                isFetching: false,
                error: action.response.error
            });
        default:
            return state
    }
}

const app = combineReducers({
    login
})

export default app