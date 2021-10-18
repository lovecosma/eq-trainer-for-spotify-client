import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from "react-router-dom"
import { getUser } from '../../actions/users'
import { Redirect } from "react-router-dom"
import {UserContext} from "../../App"
export default function UserProfile() {
    const {id} = useParams()
    const {user} = useSelector(({usersReducer}) => {
        return {
          user: usersReducer.user,
          loggedIn: usersReducer.loggedIn,
          requesting: usersReducer.requesting,
        }
      })
  return (
      <div>
         <div>Hello, {user.display_name}</div>
         {user.playlists ? user.playlists.map(playlist => <h4 key={playlist.id} >{playlist.name}</h4>) : <div></div>}
      </div>
  )
}
