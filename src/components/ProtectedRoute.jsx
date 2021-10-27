import React, {useContext, useEffect} from "react";
import { Redirect, useParams } from "react-router-dom";
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {checkCookie} from "..//actions/cookies"
import {login} from "../actions/user"

function ProtectedRoute({ component: Component}) {

    const { id } = useParams()

    const {loggedIn, requesting, user} = useSelector(({usersReducer}) => {
        return {
            loggedIn: usersReducer.loggedIn,
            user: usersReducer.user,
            requesting: usersReducer.requesting
        }
    })

    const history = useHistory()
    const dispatch = useDispatch()

  useEffect(() => {
    if(!loggedIn){
        let userData = checkCookie()
        !!userData ? login(dispatch, userData) : history.push("/login")
    }
  }, [dispatch, history, loggedIn])
 
    if(requesting){
        return <div>Loading</div>
    } else {
        return user.spotify_id === id ? <Component dispatch={dispatch} user={user} loggedIn={loggedIn} requestingUser={requesting}/> : <Redirect to="/" />
    }
}

export default ProtectedRoute;