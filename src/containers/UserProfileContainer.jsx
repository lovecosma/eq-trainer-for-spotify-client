import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {checkCookie} from "../actions/cookies"
import { login } from '../actions/user'
import UserProfile from "../components/user/UserProfile"
export default function UserProfileContainer({requestingUser, user}) {

  return (
        <div>
            {requestingUser ? "Loading" : <UserProfile user={user} />}
        </div>
  )
}
