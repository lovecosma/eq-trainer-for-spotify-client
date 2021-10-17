const getTopAlbumsArt = () => {
    return dispatch => {
        dispatch({type: "START_REQUESTING_TOP_ALBUMS_ART"})
        fetch("http://localhost:3001/top_albums")
        .then(resp => resp.json())
        .then(albums => {
          dispatch({type: 'ADD_ALBUMS_ART', albums})
        })
    }
}

export default getTopTracksArt