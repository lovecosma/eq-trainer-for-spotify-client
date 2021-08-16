import React, { Component } from 'react'
import FrequencyBar from './FrequencyBar'
import styles from './Loading.css'

export class Loading extends Component {
    render() {
        return (
            <div className="gradient center" style={{height: "100vh"}}>
                <div style={{marginTop: "15%"}}>
                    <div>
                        <h4 style={{padding: "25px"}}>Loading your info from Spotify</h4>
                    </div>
                    <FrequencyBar/>
                </div>
            </div>
        )
    }
}

export default Loading
