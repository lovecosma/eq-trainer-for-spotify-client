export const getUser = (dispatch, id) => {
    dispatch({type: 'START_ADDING_USER_REQUEST'}) 
    fetch("http://localhost:3001/users/" + id)
    .then(resp => resp.json())
    .then(user => {
        debugger
        dispatch({type:'LOGIN', user}) 
    }) 
}