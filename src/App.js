import React, { useEffect, useReducer } from 'react'
import {getUser} from "./actions/users"
import "./App.css"
import usersReducer from './reducers/usersReducer'
import GuestRoutes from "./components/guest/GuestRouters"
import UserRoutes from "./components/user/UserRoutes"
export function App () {

    const [{user, loggedIn, requesting}, dispatch] = useReducer(usersReducer, {loggedIn: false, user: {},  requesting: false})

    useEffect(() => {
      let continuedUser = localStorage.getItem("user")
        if( continuedUser !== null ){
          getUser(dispatch, continuedUser.id)
        } 
    }, [])

            return (
              <div>
                {user ? <GuestRoutes/> : <UserRoutes user={user} />}
              </div>
            )

  }



export default App

