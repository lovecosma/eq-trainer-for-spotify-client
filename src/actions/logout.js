import history from '../history';

const logout = () => {
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
          dispatch({type: "LOGOUT"})
          history.push("/logout")
        })
    }
}

export default logout