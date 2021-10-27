import React from 'react'
import {NavLink} from "react-router-dom"

export default function UserLinks({logout, history, dispatch}) {
  
    return (
        <div class="nav-wrapper">
        <NavLink to="/" className="brand-logo">EQ-ify</NavLink>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to={`/playground`}>Playground</NavLink></li>
            <li><a onClick={async (e) => {
                e.preventDefault()
                history.push("/")
                await logout(dispatch)
                Promise.resolve("resolved")
                }} href="/logout">logout</a>
            </li>
        </ul>
      </div>
    )
}
