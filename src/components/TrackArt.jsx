import React from 'react'

export default function TrackArt({track}) {
    return (
        <div id="track-art" > 
            <img src={track.album_art} width={250} height={250}/>
        </div>
    )
}
