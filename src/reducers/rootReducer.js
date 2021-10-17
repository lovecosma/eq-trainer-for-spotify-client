  
import { combineReducers } from 'redux'
import usersReducer from "./usersReducer"
import albumsReducer from "./albumsReducer"

const rootReducer = combineReducers({
    usersReducer,
    albumsReducer
})

export default rootReducer