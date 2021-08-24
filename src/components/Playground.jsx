import React, { Component } from 'react'
import {connect} from "react-redux"
import fetchUserTracks from "../actions/fetchUserTracks"
import EQUI from "./EQUI"
import * as Tone from "tone"
export class Playground extends Component {

    state={
        playing: false
    }
 
    componentDidMount(){
        if(this.props.user.id){
        this.props.fetchUserTracks(this.props.user)
        }
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
                    <button onClick={this.play}></button>
                    <div>
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
