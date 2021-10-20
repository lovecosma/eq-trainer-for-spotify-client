import React, { useContext } from 'react'
import { NavLink, useHistory } from "react-router-dom"
import { logout } from '../actions/users'
import {useDispatch, useSelector} from "react-redux"
import { UserContext } from '../UserProvider'

export default function NavBar() {
    const history = useHistory()
    const {loggedIn, logout} = useContext(UserContext)
    if(loggedIn){
        return (
            <div>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/playground">Playground</NavLink></li>
                <li><a onClick={(e) => {
                e.preventDefault()
                logout()
                history.push("/")
                }} href="/logout">logout</a></li>
            </div>
        )
    } else if(!loggedIn){
        return (
            <div>
                <li><NavLink to="/">home</NavLink></li>
                <li><a href="http://localhost:3001/login">login</a></li>
            </div>
        )
    } else {
        return <div></div>
    }
}
