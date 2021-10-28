
export const login = (dispatch, user) => {
    dispatch({type: "REQUESTING_LOGIN"})
    dispatch({type: "LOGIN", user})
}

export const logout = async (dispatch) => {
    dispatch({type: "REQUESTING_LOGOUT"})
   await fetch("/api/logout", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    dispatch({type: "LOGOUT"})
    return Promise.resolve("resolved")
} 