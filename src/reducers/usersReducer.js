function usersReducer(state = { isLoggedIn: false, user: {},  requesting: true, token: "", carousel: [], grid: []} , action) {
    switch (action.type) {

    case 'START_ADDING_USER_REQUEST':
        return {
            ...state,
            requesting: true
        }
    
    case 'START_LOGGING_OUT':
        return {
            ...state,
            requesting: true
        }

    case 'LOGOUT':
        console.log("in logout");
        return {
            ...state,
            user: {},
            requesting: false
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
        return {
            ...state,
            carousel: [...carousel],
            grid: [...grid],
            requesting: false
        }

    case 'LOGIN':
        return {
            isLoggedIn: true,
            user: {...action.user},
            token: action.token,
            requesting: false
    }

    case 'LOGOUT':
        return {
            isLoggedIn: false,
            user: {},
            requesting: false
    } 
      default:
        return state;
    }
  };


  export default usersReducer