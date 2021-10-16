import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import UserProfile from './UserProfile'
import Logout from "../Logout"
import UserNav from "./UserNav"
export default function UserRouter() {
    return (
        <div>
            <Router>
                <UserNav/>
                <Switch>
                    <Route path="/users/:id"><UserHome/></Route>
                    <Route exact path='/logout' component={Logout} />
                </Switch>
            </Router>
        </div>
    )
}
