const tracksReducer = (state = {tracks: [], requesting: false, carousel: [], grid: []}, action) => {
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
        case "START_REQUESTING_TOP_TRACK_ART":
            return {
                ...state,
                requesting: true
            }
    
        case 'ADD_TRACK_ART':
            let carousel = []
            let grid = []
            let counter = 0
            while(counter < 8){
                carousel.push(action.albums[counter++])
            }
            while(counter < 17){
                grid.push(action.albums[counter++])
            }
            console.log(state);
            return {
                ...state,
                carousel: [...carousel],
                grid: [...grid],
                requesting: false
            }
      default:
        return state;
    }

    
}

export default tracksReducer