import React from 'react'
import "../stylesheets/TrackInfo.css"
import PlayerUI from './PlayerUI'
import TrackSelect from './TrackSelect'
export default function TrackInfo({track}) {
    return (
        <div id="track-info" >
            <p>{track.name}</p>
            <p>{track.artist}</p>
            <p>{track.album_name}</p>
            <PlayerUI/>
        </div>  
    )
}
