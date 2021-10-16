
export const getUser = (dispatch, id, history) => {
    dispatch({type: 'START_ADDING_USER_REQUEST'}) 
    fetch("http://localhost:3001/users/" + id)
    .then(resp => resp.json())
    .then(user => {
        dispatch({type:'LOGIN', user}) 
        // history.push(`/users/${user.id}`)
    }) 
}

    export const logout = () => {
        return dispatch => {
            dispatch({type: "START_LOGGING_OUT"})
            let configObj = {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }
            fetch(`http://localhost:3001/logout`, configObj)
            .then(resp => resp.json())
            .then(json => {
            localStorage.removeItem("user")
            dispatch({type: "LOGOUT"})
            // history.push("/logout")
            })
        }
    }