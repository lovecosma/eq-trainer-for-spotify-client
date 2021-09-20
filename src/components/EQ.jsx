import React from "react";
import Sketch from "react-p5";
import * as Tone from "tone" 
import audioTest from "../assets/audio-test.wav"

 const EQ = ({playing, dials, track}) => {
    const {one, two, three} = dials
	const mapRange = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
	let freq = mapRange(one, 0, 100, 0, 2000)
	const biquad = new Tone.BiquadFilter(freq, 'lowpass')
	const player =  new Tone.Player(track.preview_url, () => {
		player.connect(biquad).toDestination().start()	
	})
	if(playing){
		return (
			<div>
				<h1>Playing</h1>
				<p>Knob 1: {one}</p>
				<p>Knob 2: {two}</p>
				<p>Knob 3: {three}</p>
			</div>
		)
	} else {
		<h1>
			Not Playing
		</h1>
	}

}

export default EQ