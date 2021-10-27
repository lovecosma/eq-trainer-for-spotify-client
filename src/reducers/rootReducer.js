  
import { combineReducers } from 'redux'
import usersReducer from "./usersReducer"
import albumsReducer from "./albumsReducer"
import playlistsReducer from "./playlistsReducer"
const rootReducer = combineReducers({
    usersReducer,
    albumsReducer,
    playlistsReducer
})

export default rootReducer