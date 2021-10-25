import React, { useContext, useEffect, useState } from 'react'
import M from "materialize-css"
import "./Playground.css"
import {UserContext} from "../UserProvider"
import { useHistory, Redirect } from 'react-router-dom'

export default function Playground() {
    console.log("Playground rendered");
    const [currentTrack, setCurrentTrack] = useState({})
    const [playlists, setPlaylists] = useState()
    const {user, loggedIn} = useContext(UserContext)
    const history = useHistory()
    // var item = items[Math.floor(Math.random()*items.length)];
    useEffect(() => {
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
    }, [])

        return (
            <div className="center container">
                <h1>Welcome, let's start training</h1>
                <div  id="playlist-selection">
                    <div class="input-field col s12">
                        <select>
                            {user.playlists.map(playlist => <option value={playlist.id}>{playlist.name}</option>)} 
                        </select>
                        <label>Choose a playlist</label>
                    </div>
                </div>
            </div>
        )
}
