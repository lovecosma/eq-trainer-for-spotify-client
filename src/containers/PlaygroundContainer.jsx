import React, {useEffect, useState } from 'react'
import M from "materialize-css"
import "./Playground.css"
import { useHistory} from 'react-router-dom'
import {fetchPlaylists, fetchPlaylist} from "../actions/playlists"
import {useSelector} from "react-redux"
import PlaylistSelect from "../components/PlaylistSelect"
import TrackSelect from "../components/TrackSelect"
import PlaygroundTrackCard from './PlaygroundTrackCard'


export default function PlaygroundContainer({dispatch, user}) {

    const history = useHistory()
    const [playlistSet, setPlaylistSet] = useState(false)
    const [trackSet, setTrackSet] = useState("")
    const {playlists, tracks} = useSelector(({playlistsReducer}) => {
        return {
            playlists: playlistsReducer.playlists,
            tracks: playlistsReducer.tracks,
        }
    })

     useEffect(() => {
        const fetchUserPlaylists = async () => {
            await fetchPlaylists(dispatch, user)
            let elems = document.querySelectorAll('select');
            M.FormSelect.init(elems, {});
        }
        fetchUserPlaylists()
    }, [user, dispatch])

    const changePlaylist = async (e) => {
      await fetchPlaylist(dispatch, e.target.value)
      setPlaylistSet(true)
    }

    const changeTrack = (e) => {
        fetch(`api/tracks/${e.target.value}`)
        .then(resp => resp.json())
        .then(trackData => {
            debugger
        })

    }
 
        return (
            <div className="container">
                <h1>Welcome, let's start training</h1>
                <PlaylistSelect playlists={playlists} changePlaylist={changePlaylist}/>
                <br/>
                {playlistSet ? <TrackSelect tracks={tracks} changeTrack={changeTrack}/> : <div></div>}
                {trackSet ? <PlaygroundTrackCard/> : <div></div> }
            </div>
        )
}
