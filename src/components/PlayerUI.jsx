import React from 'react'
import skip from "../assets/skip.svg"
import playButton2 from "../assets/noun_play button_3182971.svg"
import Spectrum from './Spectrum'

export default function PlayerUI() {
    return (
        <div className="player-ui" >
            <div id="controls">
                <img id="skip-button" src={skip} alt="back"/>
                <img src={playButton2} width="100px" height="100px" alt="play button"/>
                <img src={skip} alt="skip"/>
            </div>
        </div>
    )
}
