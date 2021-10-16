import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AdminProfile from './AdminProfile'
import Logout from "../Logout"
import AdminNav from "./AdminNav"
export default function AdminRouter() {
    return (
        <div>
            <Router>
                <UserNav/>
                <Switch>
                    <Route path="/users/:id"><AdminProfile/></Route>
                    <Route exact path='/logout' component={Logout} />
                </Switch>
            </Router>
        </div>
    )
}
