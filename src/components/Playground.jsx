import React, { Component } from 'react'
import {connect} from "react-redux"
import fetchUserTracks from "../actions/fetchUserTracks"
import EQUI from "./EQUI"
import * as Tone from "tone"
import { Silver } from 'react-dial-knob'

export class Playground extends Component {

    state={
        playing: false,
        dials: {
            one: 0
        }
    }
 
    componentDidMount(){
        if(this.props.user.id){
        this.props.fetchUserTracks(this.props.user)
        }
    }

    changeDial = (e) => {
        this.setState({
            ...this.state,
            dials: {
                ...this.state.dials,
                one: e
            }
        })
    }

    play = async () => {
        await Tone.start()
        this.setState({
            playing: true
        })
        console.log('audio is ready')
    }

    render() {
        if(!this.props.tracks[0]){
            return (
                <div>
                    <div>
                        Hello
                    </div> 
                </div>
            )
        } else {
            return (
                <div>
                    <h1>
                        {this.props.tracks[0].name}
                    </h1>
                    <h1>
                        <img src={this.props.tracks[0].album_art} width="200px" height="200px"/>
                    </h1>
                    <br/>
                    <button onClick={this.play}>Play Audio</button>
                    <div>
                        <div className="block-container container center">
                            <div className="block-child">
                                <Silver
                                    name="one"
                                    diameter={200}
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={this.state.dials.one}
                                    onValueChange={this.changeDial}
                                    ariaLabelledBy={'my-label'}
                                />
                            </div>
                            <div className="block-child">
                                <Silver
                                    name="one"
                                    diameter={200}
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={this.state.dials.one}
                                    onValueChange={this.changeDial}
                                    ariaLabelledBy={'my-label'}
                                />
                            </div>
                            <div className="block-child">
                                <Silver
                                    name="one"
                                    diameter={200}
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={this.state.dials.one}
                                    onValueChange={this.changeDial}
                                    ariaLabelledBy={'my-label'}
                                />
                            </div>
                        </div>
                        
                     {this.state.playing ? <EQUI playing={this.state.playing}/> : "Loading"}
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = ({usersReducer, tracksReducer}) => {
    // debugger
    return {
        user: usersReducer.user, 
        tracks: tracksReducer.tracks,
        requesting: tracksReducer.requesting

    }
}

export default connect(mapStateToProps, {fetchUserTracks})(Playground)
