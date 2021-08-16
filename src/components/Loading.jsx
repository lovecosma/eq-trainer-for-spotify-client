import React, { Component } from 'react'
import FrequencyBar from './FrequencyBar'
import styles from './Loading.css'

export class Loading extends Component {
    render() {
        return (
            <div className="gradient" style={{marginTop: "15%"}}>
                <FrequencyBar/>
            </div>
        )
    }
}

export default Loading
