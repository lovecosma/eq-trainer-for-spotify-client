const getTopTracksArt = () => {
    return dispatch => {
        dispatch({type: "START_REQUESTING_TOP_TRACK_ART"})
        fetch("http://localhost:3001/top_albums")
        .then(resp => resp.json())
        .then(albums => {
          // debugger
          dispatch({type: 'ADD_TRACK_ART', albums})
        })
    }
}

export default getTopTracksArt