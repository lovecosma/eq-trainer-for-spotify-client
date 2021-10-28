export const fetchPlaylists = async (dispatch, user) => {
    dispatch({type: "REQUESTING_PLAYLISTS"})
    let resp = await fetch(`/api/users/${user.id}/playlists`)
    let playlists = await resp.json()
    dispatch({type: "ADDING_PLAYLISTS", playlists})
    Promise.resolve("resolved")
}