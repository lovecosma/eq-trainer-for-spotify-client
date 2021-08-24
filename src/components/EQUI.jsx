import React from "react";
import Sketch from "react-p5";
import * as Tone from "tone" 
import audioTest from "../assets/audio-test.wav"
const EQUI = (props) => {
let fft
let player
let done = false
let buffer



	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(700, 500).parent(canvasParentRef);
		p5.stroke(255)
		fft = new Tone.FFT(1024)
		buffer = new Tone.Buffer(audioTest, (buff) => {
			 
		})
		player = new Tone.Player(buffer, (p) => {
			done = true
			player.connect(fft)
			player.toDestination().start()
		})
		
    };
	
	const draw = (p5) => {
		p5.background(255)
		if(props.playing && done){
			
		}
    };

	function mousePressed() {
	}
	function mouseReleased() {
	}

	return <Sketch setup={setup} draw={draw} />;
};

export default EQUI