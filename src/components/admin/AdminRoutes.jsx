import React from 'react'
import {Route, Switch } from "react-router-dom"
import AdminProfile from './AdminProfile'
import Logout from "../Logout"
import AdminNav from "./AdminNav"

export default function AdminRoutes({user}) {
    return (
        <div>
            <AdminNav user={user} />
            <Switch>
                <Route path="/users/:id"><AdminProfile/></Route>
                <Route exact path='/logout' component={Logout} />
            </Switch>
        </div>
    )
}
