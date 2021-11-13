import React, {useState} from 'react'
import EQUI from '../components/EQUI'
import "../stylesheets/PlaygroundTrackCard.css"
import TrackInfo from "../components/TrackInfo"
import PlayerUI from '../components/PlayerUI'
import TrackArt from '../components/TrackArt'
import Spectrum from '../components/Spectrum'
export default function PlaygroundTrackCard({track}) {

    const [playing, setPlaying] = useState(false)

    const play = async () => {
        setPlaying(true)
    }

    const stop = async () => {
        setPlaying(false)
    }


    return (
       <div>
           <div id="track-container">
            <TrackArt track={track}/>
            <TrackInfo track={track} play={play} playing={playing} stop={stop}/>
            </div>
            {playing ? <Spectrum track={track}/> : <h1>Not Playing</h1>}
       </div>
   )
}
