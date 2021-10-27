
export const login = (dispatch, user) => {
    dispatch({type: "REQUESTING_LOGIN"})
    dispatch({type: "LOGIN", user})
}

export const logout = async (dispatch) => {
    dispatch({type: "REQUESTING_LOGOUT"})
   await fetch("http://localhost:3001/logout", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    dispatch({type: "LOGOUT"})
} 