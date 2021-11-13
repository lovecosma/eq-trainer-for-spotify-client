import React from 'react'
import skip from "../assets/skip.svg"
import playButton2 from "../assets/noun_play button_3182971.svg"
import stop_button from "../assets/stop.svg"

import Spectrum from './Spectrum'

export default function PlayerUI({playing, play, stop}) {
    return (
        <div id="track-container">
            <img id="back-button" src={skip} alt="back" style={{}}/>      
            {playing ? <img onClick={() => stop()} src={stop_button} width="40px" height="40px" alt="stop button"/> : <img onClick={() => play()} src={playButton2} width="40px" height="40px" alt="play button"/>}
            <img src={skip} alt="skip"/>
        </div>
    )
}
