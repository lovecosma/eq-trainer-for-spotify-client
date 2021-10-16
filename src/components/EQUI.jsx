import React, { Component } from "react"
import { Silver } from "react-dial-knob"
import * as Tone from "tone"
import EQ from "./EQ"
import EQKnob from "./EQKnob"

class EQUI extends Component {

   state={
        playing: false,
        dials: {
            one: 0,
            two: 0,
            three: 0
        },
        freq: 0,
        player: {},
        lowpass: {},
        highpass: {}
   }
    mapRange = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

   componentDidMount(){
	// let freq = mapRange(one, 0, 100, 0, 2000)
	const lowpass = new Tone.BiquadFilter(20000, 'lowpass')
    const highpass = new Tone.BiquadFilter(0, 'highpass')
    lowpass.gain.value = -20
    highpass.gain.value = -20
    this.setState({ 
        lowpass,
        highpass
    })
	const player =  new Tone.Player(this.props.track.preview_url, () => {
        this.setState({
            player: player
        })
        this.state.player.chain(this.state.lowpass, this.state.highpass, Tone.Destination)
        console.log("ready")
	})
   }

   play = async () => {
    await Tone.start()
    this.setState({
        playing: true
    })
    this.state.player.start()
    console.log('audio is ready')
}

    handleTurn = (knobInfo) => {
        this.setState({
            ...this.state,
            dials: {
                ...this.state.dials,
                [knobInfo.name]: knobInfo.value
            }
        })
        let freq = this.mapRange(this.state.dials.one, 0, 100, 0, 20000)
        let freq2 = this.mapRange(this.state.dials.two, 0, 100, 0, 20000)
        this.setState({
            freq
        })
        this.state.lowpass.frequency.value = this.state.freq
        this.state.highpass.frequency.value = freq2
        console.log(this.state.lowpass.frequency.value);
    }


	render(){
		return (
            <div>
            <button onClick={this.play}>Play</button>
                {this.state.playing ? "Playing" : <h1>Press play to hear music</h1>}
			<div className="block-container container center">
                <EQKnob name={"one"} handleTurn={this.handleTurn}/>
                <EQKnob name={"two"} handleTurn={this.handleTurn}/>
                <EQKnob name={"three"} handleTurn={this.handleTurn}/>
            </div>
        </div>
		)
	}

};

export default EQUI