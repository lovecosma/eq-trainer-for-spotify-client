import React, { useEffect, useReducer } from 'react'
import {getUser} from "./actions/users"
import "./App.css"
import usersReducer from './reducers/usersReducer'
import GuestRoutes from "./components/guest/GuestRouters"
import AdminRoutes from "./components/admin/AdminRoutes"
import UserRoutes from "./components/user/UserRoutes"
import Loading from "./components/Loading"
import LoginSucces from "./components/LoginSuccess"
import { Route } from "react-router-dom"
import NavBar from './components/NavBar'
export function App () {


    useEffect(() => {
      let continuedUser = localStorage.getItem("user")
        // if( continuedUser !== null ){
        //   getUser(dispatch, continuedUser.id)
        // }
    }, [])

            if(loggedIn){
              return (
                <div>
                  <NavBar user={user} />
                  {user.admin ? <AdminRoutes user={user} /> : <UserRoutes user={user} dispatch={dispatch}/>}
                </div>
              )
            } else {
              return(
                <div>
                  <NavBar user={user} />
                  <GuestRoutes/>
                </div>
              )  
            }

  }



export default App

