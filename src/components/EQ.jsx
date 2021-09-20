import React from "react";
import Sketch from "react-p5";
import * as Tone from "tone" 
import audioTest from "../assets/audio-test.wav"

 const EQ = ({playing, dials, track}) => {
    const {one, two, three} = dials
	const player =  new Tone.Player(track.preview_url, () => {
		player.toDestination().start()	
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