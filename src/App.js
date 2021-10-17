import React, { useEffect, useReducer } from 'react'
import {getUser} from "./actions/users"
import "./App.css"
import usersReducer from './reducers/usersReducer'
import GuestRoutes from "./components/guest/GuestRouters"
import AdminRoutes from "./components/admin/AdminRoutes"
import UserRoutes from "./components/user/UserRoutes"
import Loading from "./components/Loading"
import LoginSuccess from "./components/LoginSuccess"
import { Route, Switch } from "react-router-dom"
import NavBar from './components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import Home from './components/Home'
export function App () {

  return (
        <div>
         <NavBar/>
          <Switch>
            <UserRoutes />
            <GuestRoutes />
          </Switch>
          </div>
      )
  }




export default App

