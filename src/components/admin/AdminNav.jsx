import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminNav({user}) {
    return (
        <div>
            <nav>
                <li><NavLink to={`/users/${user.id}`}>Profile</NavLink></li>
                <li><NavLink to="/logout">Logout</NavLink></li>
            </nav>
        </div>
    )
}
