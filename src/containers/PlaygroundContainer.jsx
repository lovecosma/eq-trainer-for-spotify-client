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
    const {playlists, requesting, playlist} = useSelector(({playlistsReducer}) => {
        return {
            playlists: playlistsReducer.playlists,
            requesting: playlistsReducer.requesting,
            playlist: playlistsReducer.playlist
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
    //   let elems = document.querySelectorAll('select');
    //   M.FormSelect.init(elems, {});
    }

    const changeTrack = (e) => {

    }

        return (
            <div className="container">
                <h1>Welcome, let's start training</h1>
                <PlaylistSelect playlists={playlists} changePlaylist={changePlaylist}/>
                {playlist.id ? playlist.tracks.map(track => <h1>{track.name}</h1>) : <div></div>}
            </div>
        )
}
