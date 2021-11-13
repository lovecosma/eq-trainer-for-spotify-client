import React from 'react'
import Sketch from "react-p5"
import * as Tone from "tone"
export default function Spectrum({track}) {

    let button;
    let fft
    let spectrum
    let biquad; let player

    const preload = () => {
        biquad = new Tone.BiquadFilter(200, 'lowpass')
        player =  new Tone.Player(track.preview_url, () => {
            player.connect(biquad).toDestination()
        })
    }
  
    const toggleSong = () => {

    }
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(canvasParentRef.clientWidth * 0.90, 250).parent(canvasParentRef);
        // p5.colorMode("HSB");
        // p5.angleMode("DEGREES");

        // fft = new Tone.FFT(32).toDestination()
    }

    const draw = (p5, canvasParentRef) => {
        p5.background(255)
        // spectrum = fft.getValue()
        // console.log(spectrum)
        // p5.stroke(255)
        // p5.noFill()
    }


    return (
        <div className="center">
            <Sketch preload={preload} setup={setup} draw={draw} />
        </div>
    )
}
