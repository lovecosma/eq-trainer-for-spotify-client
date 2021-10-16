import React, { Component, useEffect } from 'react'
import { connect } from "react-redux"
import {logout} from "../actions/users"
import {NavLink} from "react-router-dom"



function NavLinks ({user}) {
    if(user.id){
            return (
                <div>
                    <li><NavLink to="/">home</NavLink></li>
                    <li><NavLink to="/playground">Playground</NavLink></li>
                    <li><NavLink to="/">Train</NavLink></li>
                    <li><a>logout</a></li>
                </div>
            )
        } else {
            return (
                <div>
                    <li><NavLink to="/">home</NavLink></li>
                    <li><a href="http://localhost:3001/login">login</a></li>
                </div>
            )
        }
}

export default NavLinks

