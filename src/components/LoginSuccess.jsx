import React, {useContext, useEffect} from 'react'
import {useParams, useHistory } from "react-router-dom"
import {UserContext} from "../UserProvider"
export function LoginSuccess(){

   
    const {id} = useParams()
    const {fetchUser, requesting} = useContext(UserContext)
    const history = useHistory()

    const fetchExistingUser = async () => {
        await fetchUser(Number(id))
        history.push(`/playground`)
    }

    useEffect(() => {
       fetchExistingUser()
    }, [])
 

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}


export default LoginSuccess