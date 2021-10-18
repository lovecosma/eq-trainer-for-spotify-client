
export const getUser = (dispatch, id) => {
    dispatch({type: 'START_ADDING_USER_REQUEST'}) 
    fetch("http://localhost:3001/users/" + id)
    .then(resp => resp.json())
    .then(user => {
        localStorage.setItem("user_id", user.id)
        dispatch({type:'LOGIN', user})
    }) 
}

export const logout = (dispatch, history) => {
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
            history.push("/")
            })
    }