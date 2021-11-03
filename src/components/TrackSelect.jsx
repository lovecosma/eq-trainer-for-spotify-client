import React from 'react'

export default function TrackSelect({tracks, changeTrack}) {
    return (
        <div class="input-field col s12">
            <select onChange={changeTrack} >
            <option value="" disabled selected>Choose your option</option>
            {tracks.map(track => <option value={track.id}>{track.name}</option> )}
            </select>
            <label>Select a track</label>
        </div>  
    )
}
