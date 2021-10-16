import React, { useEffect, useReducer } from 'react'
import {getUser} from "./actions/users"
import "./App.css"
import usersReducer from './reducers/usersReducer'

export function App () {

    const [{user, loggedIn, requesting}, dispatch] = useReducer(usersReducer, {loggedIn: false, user: {},  requesting: true})

    useEffect(() => {
      let continuedUser = localStorage.getItem("user")
        if( continuedUser !== undefined ){
          getUser(dispatch, continuedUser.id)
        }
    }, [])

      if(loggedIn){
        return <div>{user.admin ? <AdminRouter/> : <UserRouter/>}</div>
      } else {
        return <GuestRouter/>
      }

  }



export default App

