const albumsReducer = (state = {tracks: [], requesting: true, carousel: [], grid: []}, action) => {
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
        case "START_REQUESTING_TOP_ALBUMS_ART":
            return {
                ...state,
                requesting: true
            }
    
        case 'ADD_ALBUMS_ART':
            let carousel = []
            let grid = []
            let counter = 0
            while(counter < 8){
                carousel.push(action.albums[counter++])
            }
            while(counter < 17){
                grid.push(action.albums[counter++])
            }
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

export default albumsReducer