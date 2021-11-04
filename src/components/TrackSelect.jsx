import React, {useEffect} from 'react'
import {useSelector} from "react-redux"
import M from "materialize-css"
export default function TrackSelect({tracks, changeTrack}) {

    useEffect(() => {
            let elems = document.querySelectorAll('select');
            M.FormSelect.init(elems, {});
    }, [tracks])
    
    return (

            <div class="input-field col s12">                   
            <select onChange={changeTrack}>
                {!!tracks[0] ? <option value="" disabled selected>Choose your option</option> : <option value="" disabled selected>No options available for this playlist</option>}
                {tracks.map(track => <option value={track.id}>{track.name}</option>)}
            </select>
            <label>Select a track</label> 
            </div>
    )
}
