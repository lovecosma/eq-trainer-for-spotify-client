export async function getTopAlbumsArt(dispatch){
    dispatch({type: "REQUESTING_TOP_ALBUMS"})
    let resp = await fetch("api/top_albums")
    let albums = await resp.json()
    dispatch({type: "ADD_TOP_ALBUMS", albums})
    
    return Promise.resolve("resolved")
}