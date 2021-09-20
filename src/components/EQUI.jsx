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
        }
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
            dials: {
                ...this.state.dials,
                [knobInfo.name]: knobInfo.value
            }
        })
    }


	render(){
		return (
            <div>
            <button onClick={this.play}>Play</button>
                {this.state.playing ? <EQ playing={this.state.playing} dials={this.state.dials} track={this.props.track} />: <h1>Press play to hear music</h1>}
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