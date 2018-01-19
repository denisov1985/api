import login from './login'
import { combineReducers }  from 'redux'

// Combine all reducers you may have here
export default combineReducers({
    login: login,
})

const state = {};

export const initialStates = {
    state,
};