const getUserInfoInitially = (token, history) => {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_USER_REQUEST'}) 
        let config = {
            method: "GET",
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
                "Authorization": token
            }
        }
        fetch("http://localhost:3001/get_info", config)
        .then(resp => resp.json())
        .then(user => {
            history.push("/success", {
                user
            })
            }) 
        };
    }

export default getUserInfoInitially