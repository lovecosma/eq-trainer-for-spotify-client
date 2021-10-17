import React from 'react'
import {NavLink} from "react-router-dom"
export default function GuestNav() {
    return (
        <div>
           <li><NavLink to="/">Home</NavLink></li>
           <li><a href="http://localhost:3001/login">Login</a></li>
        </div>
    )
}
