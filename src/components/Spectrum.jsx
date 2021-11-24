import React from 'react'
import Sketch from "react-p5"
import * as Tone from "tone"
export default function Spectrum({playing, fft}) {

    let button;
    let spectrum
    let height = 250
    let width
    const toggleSong = () => {
        
    }
    const setup = (p5, canvasParentRef) => {
        width = canvasParentRef.clientWidth * 0.90
        p5.createCanvas(width, height).parent(canvasParentRef);
        // p5.colorMode("HSB");
        // p5.angleMode("DEGREES");
    }

    const draw = (p5, canvasParentRef) => {
        p5.background(0)
       if(playing){
        spectrum = fft.getValue()
        p5.stroke(255)
        for(let i = 0; i < spectrum.length; i++){
            let amp = spectrum[i] 
            let y = p5.map(amp, -200, 1, height*1.5, 0)
            p5.line(i, height, i, y)
        }
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
