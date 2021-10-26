import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"


export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const history = useHistory()
    const [user, setUser] = useState({})
    const [requesting, setRequesting] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)
    
    const [requestingAlbums, setRequestingAlbums] = useState(true)
    const [albums, setAlbums] = useState({
        grid: [],
        carousel: []
    })

    

  // useEffect(() => {
  //   let logged = localStorage.getItem("loggedIn")
  //   if(logged){
  //     let user_id = JSON.parse(getCookie("user"))
  //     if(user_id !== ""){
  //       setRequesting(true)
  //       fetch(`/api/users/${Number(user_id)}`)
  //       .then(resp => resp.json())
  //       .then(userData => {
  //           setUser({...userData})
  //           setLoggedIn(true)
  //           setRequesting(false)
  //           localStorage.setItem("loggedIn", JSON.stringify(true))
  //       })
  //     }
  //   }
  // }, [setUser, setLoggedIn, setRequesting])


    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      function checkCookie() {
        // let user_id = JSON.parse(getCookie("user"));
        // if (user !== "") {
        //   fetchUser(user.id)
        // } else {
        //   history.push("/")
        // }
      }

    async function getTopAlbumsArt(){
            setRequestingAlbums(true)
            let resp = await fetch("api/top_albums")
            let albumsData = await resp.json()
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
              return Promise.resolve("resolved")
        }

    async function fetchUser(id){
        setRequesting(true)
        let resp
        try{
             resp = await fetch(`/api/users/${id}`)
        } catch(e) {
            return Promise.reject(e)
        }
        let userData = await resp.json()
            setUser({...userData})
            setLoggedIn(true)
            setRequesting(false)
            setCookie("user", JSON.stringify(userData.id), 365)
            localStorage.setItem("loggedIn", JSON.stringify(true))
             return Promise.resolve("resolved")
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
            setCookie("user", "")
            localStorage.setItem("loggedIn", false)
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
            requestingAlbums,
            setCookie,
            getCookie, 
            checkCookie
        }} >
            {props.children}
        </UserContext.Provider>
    )
}

export const UserConsumer = UserContext.Consumer