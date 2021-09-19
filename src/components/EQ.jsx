import React from "react";
import Sketch from "react-p5";
import * as Tone from "tone" 
import audioTest from "../assets/audio-test.wav"

 const EQ = ({playing, dials}) => {
    let fft
	let player
	let done = false
	let buffer
	let {one, two, three} = dials
	
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(256, 256).parent(canvasParentRef);
		p5.stroke(0)
		fft = new Tone.FFT(256)
		buffer = new Tone.Buffer(audioTest, (buff) => {
			
		})
		player = new Tone.Player(buffer, (p) => {
			done = true
			player.connect(fft)
			player.toDestination().start()
		})
		
    };
	
	const draw = (p5) => {
		if(playing && done){
			// let spectrum = fft.getValue()
			console.log(one);
		}
    };

	function mousePressed() {
	}
	function mouseReleased() {
	}

	return <Sketch setup={setup} draw={draw} />;
}

export default EQ