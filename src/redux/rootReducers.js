import { combineReducers } from 'redux'
import users from './users/userReducers'

const rootReducers = combineReducers({
    users: users
})

export default rootReducers;