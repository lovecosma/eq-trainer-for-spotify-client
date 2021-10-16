import React from 'react'
import {Route, Switch } from "react-router-dom"
import Home from '../Home'
import Login from "../Login"
import GuestNav from "./GuestNav"

export default function GuestRoutes() {
    return (
        <div>
            <GuestNav/>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Home} />
            </Switch>
        </div>
    )
}
