import React, {useContext, useEffect} from 'react'
import {useParams } from "react-router-dom"
import {UserContext} from "../UserProvider"
export function LoginSuccess(){

   const {id} = useParams()
    const {fetchUser} = useContext(UserContext)

    useEffect(() => {
       fetchUser(id)
    }, [])
 

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}


export default LoginSuccess