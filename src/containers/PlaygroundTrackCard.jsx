import React from 'react'
import EQUI from '../components/EQUI'

export default function PlaygroundTrackCard({track}) {
    return (
        <div>
            <h2>{track.name}</h2>
            <h3>{track.artist}</h3>
            <img src={track.album_art} width={300} height={300}/>
            <EQUI/>
        </div>
    )
}
