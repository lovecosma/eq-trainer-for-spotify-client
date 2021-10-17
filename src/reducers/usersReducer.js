function usersReducer(state = {loggedIn: false, user: {},  requesting: false, toggle: false} , action) {
    switch (action.type) {

    case 'START_ADDING_USER_REQUEST':
        console.log("here");
        return {
            ...state,
            requesting: true
        }
    
    case 'START_LOGGING_OUT':
        return {
            ...state,
            requesting: true
        }

    case 'LOGIN':
        return {
            loggedIn: true,
            user: {...action.user},
            requesting: false
        }
    case "TOGGLE":
        return {
            ...state,
            loggedIn: !state.loggedIn
        }   
        case 'LOGOUT':
        return {
            loggedIn: false,
            user: {},
            requesting: false
    } 
      default:
        return state;
    }
  };


  export default usersReducer