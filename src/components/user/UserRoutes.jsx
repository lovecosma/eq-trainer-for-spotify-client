import React from 'react'
import {Route, Switch } from "react-router-dom"
import UserProfile from './UserProfile'
import Logout from "../Logout"
import AdminRoutes from '../admin/AdminRoutes'
import Home from '../Home'
export default function UserRoutes({user, dispatch}) {
    return (
        <div>
            {user.admin ? <AdminRoutes/> : 
            <div>
            <Switch>
                <Route path="/users/:id"><UserProfile user={user} dispatch={dispatch}/></Route>
                <Route exact path='/logout' component={Logout} />
                <Route exact path='/'><Home/></Route>
            </Switch></div>
            }
        </div>
    )
}
