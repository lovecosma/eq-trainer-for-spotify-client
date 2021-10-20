import React, { useState, useEffect, useContext } from "react"


const UserContext = React.createContext()

export const UserProvider = (props) => {

    const [user, setUser] = useState({})
    const [requesting, setRequesting] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)

    const fetchUser = id => {
        setRequesting(true)
        fetch(`http://localhost:3001/users/${id}`)
        .then(resp => resp.json())
        .then(userData => {
            setUser({...userData})
            setRequesting(false)
        })
        .catch(error => console.log(error))
    } 

    return (
        <UserContext.Provider value={{
            user,
            requesting,
            loggedIn,
            fetchUser
        }} >
            {props.children}
        </UserContext.Provider>
    )
}

export const UserConsumer = UserContext.Consumer