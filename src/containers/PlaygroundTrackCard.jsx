import React from 'react'
import EQUI from '../components/EQUI'
import "../stylesheets/PlaygroundTrackCard.css"
export default function PlaygroundTrackCard({track}) {
    return (
        <div id="track-ui">
            <div className="track-info">
                <h2>{track.name}</h2>
                <h3>{track.artist}</h3>
                <img src={track.album_art} width={300} height={300}/>
            </div>
            <div className="eq-ui">
                <EQUI/>
            </div>
        </div>
    )
}
