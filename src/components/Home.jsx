import React, {useEffect, useReducer, useCallback} from 'react'
import { connect } from 'react-redux'
import FrequencyBar from "./FrequencyBar"
import styles from "./Home.css"
import Nav from "./Nav"
import albums from "../db/albumArt.json"
import doodle from '../assets/doodle.png'
import M from 'materialize-css';
import SideNav from "./SideNav"
import {NavLink} from "react-router-dom"
import albumsReducer from '../reducers/albumsReducer'
import { getTopAlbumsArt } from "../actions/albums"
import Loading from './Loading'

function Home() {

    const [{grid, carousel, requesting}, dispatch] = useReducer(albumsReducer, {tracks: [], requesting: true, carousel: [], grid: []})
     useEffect(() => {
        getTopAlbumsArt(dispatch)
    }, [])

    useEffect(
        () => {
            let elems = document.querySelectorAll('.carousel');
            let instances = M.Carousel.init(elems, {});
        },
        [carousel],
    )

    if(requesting){
        return <div><Loading/></div>
    } else {
        debugger
        return (
            <div>
                <section className="float-container gradient ">
                    <h3 className="center">Get better with Spotify.</h3>
                        <div className="float-child flow-text">
                                <h2>Train your <b className="black-text">ears.</b></h2>
                                <h2> with music you <b className="black-text">know</b> and <b className="black-text">love</b></h2>
                                <h2>from your <b className="black-text">Spotify</b> playlists.</h2>
                        </div>
                        <div>
                            <div className="carousel" style={{width: "50%"}}>
                                {carousel.map(album => <a href="/" className="carousel-item" ><img src={album.image}/></a>)}
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="center container" style={{padding: "15px"}}>
                            <h5 >
                                Login with Spotify to get started.
                            </h5>
                            <form action="http://localhost:3001/login" method="get" style={{padding: "25px"}}>
                                <button id="btn" type="submit" > Login with Spotify </button> 
                            </form>
                        </div>
                    </section>
                    <section>
                        <div className="float-container2 gradient2" style={{padding: "100px", backgroundColor: "rgb(0,181,21)"}}>
                        <div className="game-board float-child2">
                            {grid.map(album => <div className="box black" ><img className="z-depth-5" src={album.image} alt="" width="200px" height="200px" style={{padding: "5px"}}/></div>)}
                            </div>
                            <div className="float-child2" style={{marginLeft: "200px"}}>
                                <h1>Tune into to the <b className="green-text">best</b> to be the <b className="green-text">best</b></h1>
                                <form action="http://localhost:3001/login" method="get" style={{padding: "25px"}}>
                                    <button id="btn" type="submit" style={{width: "300px"}}>Get started</button> 
                                </form>
                                
                            </div>
                        </div>
                </section>
            </div>
        )
    }
}

export default Home
