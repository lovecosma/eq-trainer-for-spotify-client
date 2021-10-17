import React from 'react'
import AdminNav from './admin/AdminNav'
import GuestNav from './guest/GuestNav'
import UserNav from './user/UserNav'
import { NavLink, useHistory } from "react-router-dom"
import { logout } from '../actions/users'
import {useDispatch, useSelector} from "react-redux"
export default function NavBar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const {loggedIn} = useSelector(({usersReducer}) => {
        return {
            loggedIn: usersReducer.loggedIn
        }
    })
    if(loggedIn){
        return (
            <div>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/playground">Playground</NavLink></li>
                <li><a onClick={(e) => {
                    e.preventDefault()
                    logout(dispatch, history)
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
