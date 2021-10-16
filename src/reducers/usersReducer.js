function usersReducer(state = {loggedIn: false, user: {},  requesting: true} , action) {
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

    case 'LOGIN':
        // console.log(action.user);
        // debugger
        return {
            loggedIn: true,
            user: {...action.user},
            requesting: false
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