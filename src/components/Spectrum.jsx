import React from 'react'
import Sketch from "react-p5"
export default function Spectrum({playing, fft}) {

    let button;
    let spectrum
    let height = 250
    let width

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(700, height).parent(canvasParentRef);
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
            let y = p5.map(amp, -75, -25, height, 0)
            let w = 700 /64
            p5.line(i*w , height, i*w, y)
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
