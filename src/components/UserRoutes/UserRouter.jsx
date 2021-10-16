import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import UserHome from '../user/UserHome'
import Logout from "../Logout"

export default function UserRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/users/:id"><UserHome/></Route>
                    <Route exact path='/logout' component={Logout} />
                </Switch>
            </Router>
        </div>
    )
}
