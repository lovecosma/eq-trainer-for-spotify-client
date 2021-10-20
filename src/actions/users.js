
export const getUser = (dispatch, id) => {
    dispatch({type: 'START_ADDING_USER_REQUEST'}) 
    fetch("/users/" + id)
    .then(resp => resp.json())
    .then(user => {
        localStorage.setItem("user_id", user.id)
        dispatch({type:'LOGIN', user})
    })
    .catch(error => console.log(error)) 
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
            localStorage.removeItem("user_id")
            dispatch({type: "LOGOUT"})
            history.push("/")
            })
    }