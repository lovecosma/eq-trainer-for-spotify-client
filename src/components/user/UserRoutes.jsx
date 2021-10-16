import React from 'react'
import {Route, Switch } from "react-router-dom"
import UserProfile from './UserProfile'
import Logout from "../Logout"
import UserNav from "./UserNav"
import AdminRoutes from '../admin/AdminRoutes'
export default function UserRoutes({user}) {
    return (
        <div>
            {user.admin ? <AdminRoutes/> : 
            <div>
            <UserNav user={user} />
            <Switch>
                <Route path="/users/:id"><UserProfile user={user}/></Route>
                <Route exact path='/logout' component={Logout} />
            </Switch></div>
            }
        </div>
    )
}
