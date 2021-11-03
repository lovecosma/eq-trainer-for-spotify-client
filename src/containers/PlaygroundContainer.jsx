import React, {useEffect, useState } from 'react'
import M from "materialize-css"
import "./Playground.css"
import { useHistory} from 'react-router-dom'
import {fetchPlaylists, fetchPlaylist} from "../actions/playlists"
import {useSelector} from "react-redux"
import PlaylistSelect from "../components/PlaylistSelect"
import TrackSelect from "../components/TrackSelect"


export default function PlaygroundContainer({dispatch, user}) {

    const [currentTrack, setCurrentTrack] = useState({})
    const [currentPlaylist, setCurrentPlaylist] = useState({})
    const [playlistId, setPlaylistId] = useState("")
    const history = useHistory()
    const {playlists, requesting, tracks} = useSelector(({playlistsReducer}) => {
        return {
            playlists: playlistsReducer.playlists,
            requesting: playlistsReducer.requesting,
            tracks: playlistsReducer.tracks
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
       setPlaylistId(e.target.value)

      await fetchPlaylist(dispatch, playlistId)
    //   let elems = document.querySelectorAll('select');
    //   M.FormSelect.init(elems, {});
    }

    const changeTrack = (e) => {

    }

        return (
            <div className="container">
                <h1>Welcome, let's start training</h1>
                {requesting ? <div></div> : <PlaylistSelect playlists={playlists} changePlaylist={changePlaylist}/>}
                {!!playlistId.id && !requesting ? <TrackSelect tracks={tracks} changeTrack={changeTrack}/> : <div></div>}
            </div>
        )
}
