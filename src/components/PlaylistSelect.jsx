import React from 'react'

export default function PlaylistSelect({playlists, changePlaylist}) {
    return (
        <div>   
            <div id="playlist-select" className="input-field col s12">
                <select className="choose-option"onChange={changePlaylist} >
                <option value="" disabled selected>Choose your option</option>
                {playlists.map(playlist => <option value={playlist.id}>{playlist.name}</option> )}
                </select>
                <label>Select from your playlists</label>
            </div>  
        </div>
    )
}
