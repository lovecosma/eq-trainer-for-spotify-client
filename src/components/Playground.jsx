import React, { Component } from 'react'
import {connect} from "react-redux"
import fetchUserTracks from "../actions/fetchUserTracks"
import EQUI from "./EQUI"
import * as Tone from "tone"
import { Silver } from 'react-dial-knob'

export class Playground extends Component {

    state={
        track: {}
    }
 
    componentDidMount(){
        if(this.props.user.id){
        this.props.fetchUserTracks(this.props.user)
        }
        console.log(this.state);
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log(props.tracks[Math.random(0, props.tracks.length)]);
        return ({
            track: {...props.tracks[Math.random(0, props.tracks.length)]}
            }
        )
    }

    randomTrack = (arrayOfTracks) => {
        debugger
    
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
                <div className="center">
                    <h1>
                        {this.props.tracks[0].name}
                    </h1>
                    <h1>
                        <img src={this.props.tracks[0].album_art} width="200px" height="200px"/>
                    </h1>
                    <br/>
                    <div>
                        <EQUI tracks={this.props.tracks}/>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = ({usersReducer, tracksReducer}) => {
    return {
        user: usersReducer.user, 
        tracks: tracksReducer.tracks,
        requesting: tracksReducer.requesting
    }
}

export default connect(mapStateToProps, {fetchUserTracks})(Playground)
