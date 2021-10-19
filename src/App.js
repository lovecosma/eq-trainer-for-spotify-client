import React, { useEffect } from 'react'
import {getUser} from "./actions/users"
import GuestRoutes from "./components/guest/GuestRouters"
import UserRoutes from "./components/user/UserRoutes"
import { Switch, Route, useHistory } from "react-router-dom"
import NavBar from './components/NavBar'
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import UserProfile from './components/user/UserProfile'
import Login from "./components/Login"
import LoginSuccess from "./components/LoginSuccess"
import Logout from "./components/Logout"
import Home from "./components/Home"
export const UserContext = React.createContext()
export function App () {
  const history = useHistory()
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
    if(user_id){
      try{
        getUser(dispatch, user_id)
      } catch(e){
        alert(e)
      }
    } else {
      // history.push("/")
    }
  }, [])

    if(state.requesting){
      return <div>Loading</div>
    } else {
      return (
        <div>
            <NavBar/>
            <UserContext.Provider value={{state, dispatch}}>
            <Route exact path='/login' component={Login} />
            <Route exact path="/users/:id/initialize"><LoginSuccess/></Route>
            <Route exact path="/users/:display_name"><UserProfile/></Route>
            <Route exact path='/' component={Home}/>
            </UserContext.Provider>
        </div>
      )
    }
  }




export default App

