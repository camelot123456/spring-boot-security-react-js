import {combineReducers} from 'redux'

import roleReducer from './role-reducer'
import authReducer from './auth-reducer'

const rootReducer = combineReducers({
    roleReducer,
    authReducer
})

export default rootReducer
