import React, { Component } from 'react'
import {connect} from "react-redux"
import fetchUserTracks from "../actions/fetchUserTracks"

export class Playground extends Component {
 
    componentDidMount(){
        if(this.props.user.id){
        this.props.fetchUserTracks(this.props.user)
        }
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
                        {this.props.tracks[0].album_art}
                    </h1>
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
