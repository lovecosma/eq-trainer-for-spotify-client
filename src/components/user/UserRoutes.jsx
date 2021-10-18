import React, {useEffect} from 'react'
import {Redirect, Route, useHistory} from "react-router-dom"
import UserProfile from './UserProfile'
import Logout from "../Logout"
import AdminRoutes from '../admin/AdminRoutes'
import Home from '../Home'
import { useDispatch, useSelector } from 'react-redux'
import LoginSuccess from '../LoginSuccess'
import ProtectedRoute from '../ProtectedRoute'
import { getUser } from '../../actions/users'

export default function UserRoutes({user}) {

    return (
        <div>
            <div>
                <Route exact path="/users/:id/initialize"><LoginSuccess/></Route>
                <Route exact path='/logout' component={Logout}  />
                <Route exact path='/'><Home/></Route>
            </div>
        </div>
    )
}
