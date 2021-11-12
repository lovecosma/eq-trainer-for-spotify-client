import React from 'react'
import "../stylesheets/TrackInfo.css"
export default function TrackInfo({track}) {
    return (
        <div className="track-info">
            <img src={track.album_art} width={250} height={250}/>
            <div className="track-details">
                <p>{track.name}</p>
                <p>{track.artist}</p>
            </div>
        </div>  
    )
}
