import React, {useEffect, useState } from 'react'
import M from "materialize-css"
import "./Playground.css"
import { useHistory} from 'react-router-dom'
import {fetchPlaylists} from "../actions/playlists"

export default function PlaygroundContainer({dispatch, user}) {

    const [currentTrack, setCurrentTrack] = useState({})
    const [tracks, setTracks] = useState([])
    const [playlistId, setPlaylistId] = useState(null)
    const [playlists, setPlaylists] = useState([])
    const history = useHistory()
    

     useEffect(() => {
        fetchPlaylists(dispatch, user)
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
            </div>
        )
}
