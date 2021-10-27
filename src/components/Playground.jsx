import React, { useContext, useEffect, useState } from 'react'
import M from "materialize-css"
import "./Playground.css"
import {UserContext} from "../UserProvider"
import { useHistory, Redirect } from 'react-router-dom'

export default function Playground() {
    const [currentTrack, setCurrentTrack] = useState({})
    const [tracks, setTracks] = useState([])
    const [playlistId, setPlaylistId] = useState(null)
    const {user, loggedIn} = useContext(UserContext)
    const history = useHistory()

    

     useEffect(() => {
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});

    }, [tracks])

    const changePlaylist = (e) => {
       setPlaylistId(Number(e.target.value))
    }
    const fetchTracks = async (e) => {
        e.preventDefault()
        let resp = await fetch(`/api/playlists/${playlistId}`)
        let playlistData = await resp.json()
        setTracks([...playlistData.tracks])
    }

        return (
            <div className="container">
                <h1>Welcome, let's start training</h1>
                <form  id="playlist-selection" onSubmit={fetchTracks}>
                    <div class="input-field col s12">
                        <select onChange={changePlaylist}>
                            <option value="" selected disabled hidden>Choose a playlist</option>
                            {/* {user.playlists.filter(playlist => !!playlist.name ).map(playlist => <option key={playlist.id} value={playlist.id}>{playlist.name}</option>)}  */}
                        </select>
                        <label>Choose a playlist for practice</label>
                    </div>
                    <button type="submit">Select Playlist</button>
                </form>
                <form  id="track-selection" onSubmit={{}}>
                    <div class="input-field col s12">
                        <select onChange={{}}>
                            <option value="" selected disabled hidden>Choose a Track</option>
                            {tracks.filter(track => !!track.name ).map(track => <option key={track.id} value={track.id}>{track.name}</option>)} 
                        </select>
                        <label>Choose a track for practice</label>
                    </div>
                    <button type="submit">Select T</button>
                </form>
            </div>
        )
}
