import React from 'react'
import {NavLink} from "react-router-dom"
import "./GuestLinks.css"

export default function GuestLinks() {
    return (
    <div class="nav-wrapper">
        <NavLink to="/" className="brand-logo">EQ-ify</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">home</NavLink></li>
                <li><a href="http://localhost:3001/login">login</a></li>
            </ul>
      </div>
    )
}
