import React from 'react'
import EQUI from '../components/EQUI'
import "../stylesheets/PlaygroundTrackCard.css"
import TrackInfo from "../components/TrackInfo"
export default function PlaygroundTrackCard({track}) {
    return (
        <div id="track-ui">
            <TrackInfo track={track}/>
            <EQUI/>
        </div>
    )
}
