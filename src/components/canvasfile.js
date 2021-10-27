import React from 'react'

export default function canvasfile() {
    return (
        <div>
            <form  id="playlist-selection" onSubmit={fetchTracks}>
                    <div class="input-field col s12">
                        <select onChange={changePlaylist}>
                            <option value="" selected disabled hidden>Choose a playlist</option>
                            {/* {user.playlists.filter(playlist => !!playlist.name ).map(playlist => <option key={playlist.id} value={playlist.id}>{playlist.name}</option>)}  */}
                        </select>
                        <label>Choose a playlist for practice</label>
                    </div>
                    <button type="submit">Select Playlist</button>
                </form>
                <form  id="track-selection" onSubmit={{}}>
                    <div class="input-field col s12">
                        <select onChange={{}}>
                            <option value="" selected disabled hidden>Choose a Track</option>
                            {tracks.filter(track => !!track.name ).map(track => <option key={track.id} value={track.id}>{track.name}</option>)} 
                        </select>
                        <label>Choose a track for practice</label>
                    </div>
                    <button type="submit">Select T</button>
                </form>
        </div>
    )
}
