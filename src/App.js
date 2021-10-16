import React, { useEffect, useReducer } from 'react'
import {getUser} from "./actions/users"
import "./App.css"

export function App () {

    useEffect(() => {
      let continuedUser = localStorage.getItem("user")
      if( continuedUser !== null){
      }
    }, [])

      if(loggedIn){
        return <div>{user.admin ? <AdminRouter/> : <UserRouter/>}</div>
      } else {
        return <GuestRouter/>
      }

  }



export default App

