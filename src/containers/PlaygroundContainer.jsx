import React, {useEffect, useState } from 'react'
import M from "materialize-css"
import "./Playground.css"
import { useHistory} from 'react-router-dom'
import {fetchPlaylists, fetchPlaylist} from "../actions/playlists"
import {useSelector} from "react-redux"
import PlaylistSelect from "../components/PlaylistSelect"
import TrackSelect from "../components/TrackSelect"


export default function PlaygroundContainer({dispatch, user}) {

    const history = useHistory()
    const {playlists, playlist} = useSelector(({playlistsReducer}) => {
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
       
        // return () => {
        //     let elems = document.querySelectorAll('select');
        //     for(elem of elems){
        //       let  instance = M.FormSelect.getInstance(elem);
        //         instance.destroy();
        //     }
        // }
    }, [user, dispatch])

    const changePlaylist = async (e) => {
      await fetchPlaylist(dispatch, e.target.value)
      let elems = document.querySelectorAll('select');
      M.FormSelect.init(elems, {});
    }

    const changeTrack = (e) => {

    }

        return (
            <div className="container">
                <h1>Welcome, let's start training</h1>
                <PlaylistSelect playlists={playlists} changePlaylist={changePlaylist}/>
                <br/>
                {playlist.id ? <TrackSelect tracks={playlist.tracks} changeTrack={changeTrack}/> : <div></div>}
            </div>
        )
}
