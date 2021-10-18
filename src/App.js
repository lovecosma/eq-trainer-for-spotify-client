import React, { useEffect } from 'react'
import {getUser} from "./actions/users"
import GuestRoutes from "./components/guest/GuestRouters"
import UserRoutes from "./components/user/UserRoutes"
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import UserProfile from './components/user/UserProfile'
import Login from "./components/Login"
import LoginSuccess from "./components/LoginSuccess"
import Logout from "./components/Logout"
import Home from "./components/Home"

export function App () {

  const dispatch = useDispatch()
  const state = useSelector(({usersReducer}) => {
    return {
      user: usersReducer.user,
      loggedIn: usersReducer.loggedIn,
      requesting: usersReducer.requesting,
    }
  })
  useEffect(() => {
    let user_id = localStorage.getItem("user_id")
    getUser(dispatch, user_id)
  }, [])

    if(state.requesting){
      return <div>Loading</div>
    } else {
      return (
        <div>
            <NavBar/>
            <Route exact path='/login' component={Login} />
            <Route exact path="/users/:id/initialize"><LoginSuccess/></Route>
            <Route exact path="/users/:id"><UserProfile/></Route>
            <Route exact path='/' component={Home} />
        </div>
      )
    }
  }




export default App

