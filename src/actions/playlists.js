export const fetchPlaylists = async (dispatch, user) => {
    dispatch({type: "REQUESTING_PLAYLISTS"})
    let resp = fetch(`http://localhost:3001/playlists`)
}