export const fetchPlaylists = async (dispatch, user) => {
    dispatch({type: "REQUESTING_PLAYLISTS"})
    let resp = await fetch(`/api/users/${user.id}/playlists`)
    let playlists = await resp.json()
    dispatch({type: "ADDING_PLAYLISTS", playlists})
    Promise.resolve("resolved")
}

export const fetchPlaylist = async (dispatch, user, playlistId) => {
    dispatch({type: "REQUESTING_PLAYLIST"})
    let resp = await fetch(`/api/users/${user.id}/playlists/${playlistId}`)
    let playlist = await resp.json()
    dispatch({type: "ADD_PLAYLIST", playlist})
    Promise.resolve("resolved")
}