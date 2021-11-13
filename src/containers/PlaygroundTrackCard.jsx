import React from 'react'
import EQUI from '../components/EQUI'
import "../stylesheets/PlaygroundTrackCard.css"
import TrackInfo from "../components/TrackInfo"
import PlayerUI from '../components/PlayerUI'
export default function PlaygroundTrackCard({track}) {
    return (
        <div id="track-ui">
           <div id="player">
                <TrackInfo track={track}/>
                <PlayerUI/>
           </div>
        </div>
    )
}
