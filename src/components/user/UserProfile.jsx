import React, { useEffect, useReducer } from 'react'
import { useParams } from "react-router-dom"
import { getUser } from '../../actions/users'
import usersReducer from '../../reducers/usersReducer'

export default function UserProfile({user}) {
    return (
        <div>
            <div><h2>Hello, {user.display_name}</h2></div>     
        </div>
    )

}
