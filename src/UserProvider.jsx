import React, { useState } from "react"


export const UserContext = React.createContext()

export const UserProvider = (props) => {

    const [user, setUser] = useState({})
    const [requesting, setRequesting] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)
    
    const [requestingAlbums, setRequestingAlbums] = useState(true)
    const [albums, setAlbums] = useState({
        grid: [],
        carousel: []
    })

    function getTopAlbumsArt(){
            setRequestingAlbums(true)
            fetch("api/top_albums")
            .then(resp => resp.json())
            .then(albumsData => {
                let carouselArr = []
                let gridArr = []
                let counter = 0
                while(counter < 8){
                    carouselArr.push(albumsData[counter++])
                }
                while(counter < 17){
                    gridArr.push(albumsData[counter++])
                }
                setAlbums({
                    grid: [...gridArr],
                    carousel: [...carouselArr]
                })
              setRequestingAlbums(false)
            })
        }

    const fetchUser = (id, history) => {
        setRequesting(true)
        fetch(`/api/users/${id}`)
        .then(resp => resp.json())
        .then(userData => {
            setUser({...userData})
            setLoggedIn(true)
            setRequesting(false)
            history.push(`/users/${id}`)
        })
        .catch(error => console.log(error))
    } 

    const logout = () => {
        setRequesting(true)
        let configObj = {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
        fetch(`api/logout`, configObj)
        .then(resp => resp.json())
        .then(json => {
            setUser({})
            setLoggedIn(false)
        })
}

    return (
        <UserContext.Provider value={{
            user,
            requesting,
            loggedIn,
            logout,
            fetchUser,
            getTopAlbumsArt,
            albums,
            requestingAlbums
        }} >
            {props.children}
        </UserContext.Provider>
    )
}

export const UserConsumer = UserContext.Consumer