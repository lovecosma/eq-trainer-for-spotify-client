const playlistsReducer = (state = {playlists: [], tracks: [], requesting: true, tracks: []}, action) => {
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
        case "REQUESTING_PLAYLIST":
            return {
                ...state,
                requesting: true
            }
        case "ADD_PLAYLIST":
            return {
                ...state,
                requesting: false,
                tracks: [...action.tracks]
            }
        default: 
            return state
    }
}

export default playlistsReducer