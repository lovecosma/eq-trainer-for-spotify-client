import React, { useContext } from 'react'
import { NavLink, useHistory } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { UserContext } from '../UserProvider'
import UserLinks from "./user/UserLinks"
import GuestLinks from "./GuestLinks"
export default function NavBar() {
    const history = useHistory()
    const {loggedIn, logout, user} = useContext(UserContext)

    return (
        <div className="nav-container">
            <nav>
                {loggedIn ? <UserLinks history={history} logout={logout} user={user}/> : <GuestLinks/>}
            </nav>
        </div>
    )
    
}