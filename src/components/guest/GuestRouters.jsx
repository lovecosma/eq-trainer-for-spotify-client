import React from 'react'
import {Route, Switch } from "react-router-dom"
import Home from '../Home'
import Login from "../Login"
import LoginSuccess from '../LoginSuccess'

export default function GuestRoutes() {
    return (
        <div>
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Home} />
        </div>
    )
}
