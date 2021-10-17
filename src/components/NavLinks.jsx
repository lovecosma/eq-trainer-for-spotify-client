import React, { Component, useEffect } from 'react'
import { connect, useSelector } from "react-redux"
import {logout} from "../actions/users"
import {NavLink} from "react-router-dom"



function NavLinks (props) {
    const {user, loggedIn} = useSelector(({usersReducer}) => {
        return {
            user: usersReducer.user,
            loggedIn: usersReducer.loggedIn
        }
    })
    
}

export default NavLinks

