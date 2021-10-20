import React, {useContext, useEffect, useReducer} from 'react'
import {useHistory, useParams } from "react-router-dom"
import {UserContext} from "../UserProvider"
export function LoginSuccess(){

    const history = useHistory()
   const {id} = useParams()
    const {fetchUser} = useContext(UserContext)

    useEffect(() => {
        fetchUser(id, history)
    }, [])
 

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}


export default LoginSuccess