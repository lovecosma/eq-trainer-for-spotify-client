import React, { useContext } from 'react'
import { NavLink, useHistory } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { UserContext } from '../UserProvider'
import UserLinks from "./user/UserLinks"
import GuestLinks from "./GuestLinks"
import {logout} from "../actions/user"
export default function NavBar() {

    const {loggedIn, requesting, user} = useSelector(({usersReducer}) => {
        return {
            loggedIn: usersReducer.loggedIn,
            user: usersReducer.user,
            requesting: usersReducer.requesting
        }
    })

    const history = useHistory()
    const dispatch = useDispatch()
    
    return (
        <div className="nav-container">
            <nav>
                {loggedIn ? <UserLinks history={history} logout={logout} dispatch={dispatch} user={user}/> : <GuestLinks/>}
            </nav>
        </div>
    )
    
}