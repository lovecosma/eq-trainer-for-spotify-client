import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminNav() {
    return (
        <div>
            <nav>
                <li><NavLink to="/login">Login</NavLink></li>
            </nav>
        </div>
    )
}
