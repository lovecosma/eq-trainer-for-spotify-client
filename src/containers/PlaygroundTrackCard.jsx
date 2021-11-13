import React from 'react'
import EQUI from '../components/EQUI'
import "../stylesheets/PlaygroundTrackCard.css"
import TrackInfo from "../components/TrackInfo"
import PlayerUI from '../components/PlayerUI'
import TrackArt from '../components/TrackArt'
import Spectrum from '../components/Spectrum'
export default function PlaygroundTrackCard({track}) {
    return (
       <div>
            <div id="track-container">
                <TrackArt track={track}/>
                <TrackInfo track={track}/>
                <Spectrum track={track}/>
            </div>
            <EQUI/>
       </div>
   )
}
