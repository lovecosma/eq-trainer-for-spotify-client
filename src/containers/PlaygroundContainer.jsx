import React, {useEffect, useState } from 'react'
import M from "materialize-css"
import "../stylesheets/Playground.css"
import { useHistory} from 'react-router-dom'
import {fetchPlaylists, fetchPlaylist} from "../actions/playlists"
import {useSelector} from "react-redux"
import PlaylistSelect from "../components/PlaylistSelect"
import TrackSelect from "../components/TrackSelect"
import PlaygroundTrackCard from './PlaygroundTrackCard'
import EQUI from '../components/EQUI'


export default function PlaygroundContainer({dispatch, user}) {

    const history = useHistory()
    const [playlistSet, setPlaylistSet] = useState(false)
    const [currentTrack, setCurrentTrack] = useState("")
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
            // setRandomTrack()
        }
        fetchUserPlaylists()
    }, [user, dispatch])
    
    const changePlaylist = async (id) => {
        setPlaylistSet(false)
        await fetchPlaylist(dispatch, id)
        setPlaylistSet(true)
    }
    
    const changeTrack = (id) => {
        fetch(`/api/tracks/${id}`)
        .then(resp => resp.json())
        .then(trackData => {
            setCurrentTrack({...trackData})
        })
    }

    return (
        <div>
                <span id="playground-header"><h1 className="center">Welcome, let's start training</h1></span>
                <div className="playground-container" > 
                    <div id="selection-ui" className="">
                            <PlaylistSelect playlists={playlists} changePlaylist={changePlaylist}/>
                            {playlistSet ?  <TrackSelect tracks={tracks} changeTrack={changeTrack}/> : <div></div>}
                    </div>
                    {currentTrack.id ? <PlaygroundTrackCard track={currentTrack} /> : <div></div> }
                </div>
            </div>
        )
}
