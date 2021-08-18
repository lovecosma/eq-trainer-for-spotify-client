  
import { combineReducers } from 'redux'
import usersReducer from "./usersReducer"
import tracksReducer from "./tracksReducer"

const rootReducer = combineReducers({
    usersReducer,
    tracksReducer
})

export default rootReducer