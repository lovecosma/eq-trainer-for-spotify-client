import React, { useEffect, useReducer } from 'react'
import { useParams } from "react-router-dom"
import { getUser } from '../../actions/users'
import usersReducer from '../../reducers/usersReducer'

export default function AdminProfile() {
    const {id} = useParams()
    const [{user, loggedIn, requesting}, dispatch] = useReducer(usersReducer, {loggedIn: false, user: {},  requesting: true})
    useEffect(() => {
        getUser(dispatch, id)
    }, [])

    return (
        <div>
            {requesting 
            ? <h2>Requesting</h2>
            : <div><h2>Hello, {user.display_name}</h2></div>}   
        </div>
    )

}