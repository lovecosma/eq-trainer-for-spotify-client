import React from 'react'
import Sketch from "react-p5"
export default function Spectrum() {


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(100, 100).parent(canvasParentRef);

    }

    const draw = (p5, canvasParentRef) => {

    }


    return (
        <div>
            <Sketch setup={setup} draw={draw} />
        </div>
    )
}
