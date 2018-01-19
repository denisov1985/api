import { combineReducers } from 'redux'

function login(state = [], action) {
    console.log(action);

    return state;
}

const todoApp = combineReducers({
    login
})

export default todoApp