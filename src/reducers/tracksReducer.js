const tracksReducer = (state = {tracks: [], requesting: false}, action) => {
    switch(action.type){
    case "REQUEST_TRACKS":
        return {
           ...state,
           requesting: true
        }

    case "ADDING_TRACKS":
        return {
            ...state,
            requesting: false,
            tracks: [...action.tracks]
        }
      default:
        return state;
    }
}

export default tracksReducer