import React from "react";
import Sketch from "react-p5";
import Wave from "../models/wave"

const FrequencyBar = (props) => {

	let angles = [];
    let angleV = [] 
	let r = 4;
    let screen_width = 0
    let screen_height = 200
    let waves = []
    let waves2 = []
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
        screen_width = window.screen.width * 0.3
		p5.createCanvas(screen_width, screen_height).parent(canvasParentRef);
        for(let i = 0; i < 5; i++){
            waves[i] = new Wave(p5.random(20, 50), p5.random(100, 500), p5.random(p5.TWO_PI), p5)
            waves2[i] = new Wave(p5.random(20, 50), p5.random(100, 500), p5.random(p5.TWO_PI), p5)

        }
    };

	const draw = (p5) => {
        p5.clear()
        for(let x = 0; x < screen_width; x += 10){
            let y = 0
            let y2 = 0
            for(let wave of waves){
                 y +=  wave.calculate(x)
                }
            for(let wave of waves2){
                y2 +=  wave.calculate(x)
                }
                p5.noStroke()
                p5.fill(0)
                p5.ellipse(x, y + screen_height / 2, 10)
                p5.noStroke()
                p5.fill(255)
                p5.ellipse(x, y2 + screen_height /2, 10)
            }
        for(let wave of waves){
            wave.phase += 0.05
        }
        for(let wave of waves2){
            wave.phase += 0.05
        }
};

	return <Sketch setup={setup} draw={draw} />;
};

export default FrequencyBar