import React from 'react'
import skip from "../assets/skip.svg"
import playButton2 from "../assets/noun_play button_3182971.svg"
import Spectrum from './Spectrum'

export default function PlayerUI() {
    return (
        <div >
            <img id="back-button" src={skip} alt="back"/>
            <img src={playButton2} width="40px" height="40px" alt="play button"/>
            <img src={skip} alt="skip"/>
        </div>
    )
}
