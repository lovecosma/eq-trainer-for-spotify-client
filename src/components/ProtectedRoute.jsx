import React, {useContext, useEffect} from "react";
import { Redirect, useParams } from "react-router-dom";
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {checkCookie} from "..//actions/cookies"
import {login} from "../actions/user"

function ProtectedRoute({ component: Component}) {

    const { id } = useParams()
    const dispatch  = useDispatch()
    const {loggedIn, requesting, user} = useSelector(({usersReducer}) => {
        return {
            loggedIn: usersReducer.loggedIn,
            user: usersReducer.user,
            requesting: usersReducer.requesting
        }
    })

    if(requesting){
        return <div>Loading</div>
    } else {
        return user.spotify_id === id ? <Component dispatch={dispatch} user={user} loggedIn={loggedIn} requestingUser={requesting}/> : <Redirect to="/" />
    }
}

export default ProtectedRoute;