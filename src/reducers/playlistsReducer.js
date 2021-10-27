const playlistsReducer = (state = {playlists: [], requesting: true}, action) => {
    switch(action.type){
        case "REQUESTING_PLAYLISTS":
            return {
                ...state,
                requesting: true
            }
        case "ADDING_PLAYLISTS":
            return {
                ...state,
                requesting: false,
                playlists: [...action.playlists]
            }
        default: 
            return state
    }
}

export default playlistsReducer