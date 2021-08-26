import React, { Component } from "react"
import { Silver } from "react-dial-knob"
import * as Tone from "tone"
import EQ from "./EQ"
import EQKnob from "./EQKnob"

class EQUI extends Component {

   state={
        playing: false,
        one: 0,
        two: 0,
        three: 0
   }

   play = async () => {
    await Tone.start()
    this.setState({
        playing: true
    })
    console.log('audio is ready')
}

    handleTurn = (knobInfo) => {
        this.setState({
            ...this.state,
            [knobInfo.name]: knobInfo.value
        })
    }

	render(){
		return (
            <div>
            <button onClick={this.play}>Play</button>
            <br></br>
                {this.state.playing ? <EQ playing={this.state.playing} dials={this.state.dials}/>: <h1>Press play to hear music</h1>}
			<div className="block-container container center">
                <EQKnob name={"one"} handleTurn={this.handleTurn}/>
                <EQKnob name={"one"} handleTurn={this.handleTurn}/>
                <EQKnob name={"one"} handleTurn={this.handleTurn}/>
            </div>
        </div>
		)
	}

};

export default EQUI