import React from 'react'
import question_mark from "../assets/question.svg"
export default function TrackArt({track}) {
    return (
        <div id="track-art" > 
            {track.id ? <img src={track.album_art} alt={"album art"} width={250} height={250}/> :
            <img src={question_mark} alt={"album art"} width={250} height={250}/>}
        </div>
    )
}
