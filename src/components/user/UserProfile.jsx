import React, { useEffect, useReducer, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { getUser } from '../../actions/users'
import usersReducer from '../../reducers/usersReducer'

export default function UserProfile() {
    const {user, requesting} = useSelector(({usersReducer}) => {
        return {
            user: usersReducer.user,
            requesting: usersReducer.requesting
        }
    })
    
    return (
        <div>
           {requesting ? <h1>Loading</h1> : <h1>Hello, {user.display_name}</h1>} 
        </div>
    )

}
