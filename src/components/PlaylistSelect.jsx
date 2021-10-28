import React from 'react'

export default function PlaylistSelect({playlists, changePlaylist}) {
    return (
        <div>   
            <div class="input-field col s12">
                <select onChange={changePlaylist} >
                <option value="" disabled selected>Choose your option</option>
                {playlists.map(playlist => <option value={playlist.id}>{playlist.name}</option> )}
                </select>
                <label>Select from your playlists</label>
            </div>  
        </div>
    )
}
