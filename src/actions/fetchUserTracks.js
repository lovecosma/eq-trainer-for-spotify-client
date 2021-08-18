const fetchUsertracks = user => {
    return dispatch => {
        dispatch({type: "REQUEST_TRACKS"})
        fetch(`http://localhost:3001/users/${user.id}/tracks`)
        .then(resp => resp.json())
        .then(tracks => {
            // debugger
            dispatch({type:"ADDING_TRACKS", tracks})
        })
    }
}

export default fetchUsertracks