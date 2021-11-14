import React from 'react'
import Sketch from "react-p5"
import * as Tone from "tone"
export default function Spectrum({playing, fft}) {

    let button;
    let spectrum
    let biquad; let player
 
    const toggleSong = () => {

    }
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(canvasParentRef.clientWidth * 0.90, 250).parent(canvasParentRef);
        // p5.colorMode("HSB");
        // p5.angleMode("DEGREES");
    }

    const draw = (p5, canvasParentRef) => {
        p5.background(255)
       if(playing){
    //     spectrum = fft.getValue()
    //     console.log(spectrum)
       }
        // p5.stroke(255)
        // p5.noFill()
    }

    return (
        <div className="center">
            <Sketch setup={setup} draw={draw} />
        </div>
    )
}
