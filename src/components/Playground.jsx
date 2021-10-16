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


    render() {
        return <div>Hello</div>
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
