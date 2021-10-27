import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {checkCookie} from "../../actions/cookies"
import { login } from '../../actions/user'
import UserProfile from "./UserProfile"
export default function UserProfileContainer() {

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

  return (
        <div>
            {requesting ? "Loading" : <UserProfile user={user} />}
        </div>
  )
}
