import React from 'react'
import {Route} from "react-router-dom"
import UserProfile from './UserProfile'
import Logout from "../Logout"
import AdminRoutes from '../admin/AdminRoutes'
import Home from '../Home'
import { useSelector } from 'react-redux'
import LoginSuccess from '../LoginSuccess'
export default function UserRoutes() {
    return (
        <div>
            <div>
                <Route exact path="/users/:id"><UserProfile/></Route>
                <Route exact path="/users/:id/initialize"><LoginSuccess/></Route>
                <Route exact path='/logout' component={Logout} />
                <Route exact path='/'><Home/></Route>
            </div>
        </div>
    )
}
