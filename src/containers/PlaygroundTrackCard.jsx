import React from 'react'
import EQUI from '../components/EQUI'
import "../stylesheets/PlaygroundTrackCard.css"
import TrackInfo from "../components/TrackInfo"
import PlayerUI from '../components/PlayerUI'
import TrackArt from '../components/TrackArt'
export default function PlaygroundTrackCard({track}) {
    return (
       <div>
            <div id="track-container">
                <TrackArt track={track}/>
                <TrackInfo track={track}/>
                <span><h1>Hellooo</h1></span>
            </div>
            <EQUI/>
       </div>
   )
}
