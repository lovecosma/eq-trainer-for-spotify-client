import React from 'react'
import {Route, Switch } from "react-router-dom"
import AdminProfile from './AdminProfile'
import Logout from "../Logout"
import Home from '../Home'

export default function AdminRoutes({user}) {
    return (
        <div>
            <Switch>
                <Route path="/users/:id"><AdminProfile/></Route>
                <Route exact path='/logout' component={Logout} />
                <Route exact path='/'><Home/></Route>
            </Switch>
        </div>
    )
}
