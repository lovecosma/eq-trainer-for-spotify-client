import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {checkCookie} from "../../actions/cookies"
import { login } from '../../actions/user'
export default function UserProfileContainer() {
    const {loggedIn, requesting, user} = useSelector(({usersReducer}) => {
        return {
            loggedIn: usersReducer.loggedIn,
            user: usersReducer.user,
            requesting: usersReducer.requesting
        }
    })
    console.log(requesting);
  return (
        <div>
            {requesting ? <div>Loading</div> : <h1>Hello, {user.display_name}</h1>}
        </div>
  )
}
