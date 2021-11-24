import React, {useEffect, useState, useCallback} from 'react'
import EQUI from '../components/EQUI'
import "../stylesheets/PlaygroundTrackCard.css"
import TrackInfo from "../components/TrackInfo"
import PlayerUI from '../components/PlayerUI'
import TrackArt from '../components/TrackArt'
import Spectrum from '../components/Spectrum'
import Visualizer from "react-music-visualizer"
import * as Tone from "tone"

export default function PlaygroundTrackCard({track}) {

    const [fft, setFft] = useState(new Tone.FFT(1024));
    const [biquad, setBiquad] = useState(new Tone.BiquadFilter(200, 'lowpass'))
    const [playing, setPlaying] = useState(false)
    const [player, setPlayer] = useState(new Tone.Player(track.preview_url, () => {
        player.connect(biquad).connect(fft).toDestination()
    }))



    
    useEffect(() => { 
        stop()
        setPlaying(false)
        setPlayer(new Tone.Player(track.preview_url).connect(biquad).connect(fft).toDestination())
    }, [track, biquad, fft])


    const play = async () => {
        setPlaying(true)
        player.start()
        
    }

    const stop = async () => {
        setPlaying(false)
        player.stop()
    }



    return (
       <div>
           <div id="track-container">
            <TrackArt track={track}/>
            <TrackInfo track={track} play={play} playing={playing} stop={stop}/>
            </div>
            {/* <Spectrum playing={playing} fft={fft}/>  */}
            <Visualizer audioPreviewUrl={track.preview_url} />
       </div>
   )
}
