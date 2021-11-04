export const fetchPlaylists = async (dispatch, user) => {
    dispatch({type: "REQUESTING_PLAYLISTS"})
    let resp = await fetch(`/api/playlists`)
    let playlists = await resp.json()
    dispatch({type: "ADDING_PLAYLISTS", playlists})
    Promise.resolve("resolved")
}

export const fetchPlaylist = async (dispatch, playlistId) => {
    dispatch({type: "REQUESTING_PLAYLIST"})
    let resp = await fetch(`/api/playlists/${playlistId}`)
    let playlist = await resp.json()
    let tracks = playlist.tracks.filter(track => track.preview_url !== null )
    dispatch({type: "ADD_PLAYLIST", tracks})
    Promise.resolve("resolved")
}