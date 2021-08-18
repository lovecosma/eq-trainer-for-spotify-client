const getUserInfo = (user_id) => {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_USER_REQUEST'}) 
        fetch("http://localhost:3001/users/" + user_id)
        .then(resp => resp.json())
        .then(user => {
            dispatch({type:'LOGIN', user}) 
            }) 
        };
    }

export default getUserInfo