import React, { useEffect, useReducer } from 'react'
import { useParams } from "react-router-dom"
import { getUser } from '../../actions/users'
import usersReducer from '../../reducers/usersReducer'

export default function UserProfile({user, dispatch}) {
    const { id } = useParams()

    useEffect(() => {
        getUser(dispatch, id)
    }, [])
    
    return (
        <div>
    
        </div>
    )

}
