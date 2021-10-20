import React, {useEffect, useReducer} from 'react'
// import Loading from './Loading'
// import SideNav from "./SideNav"
import { Redirect, useHistory, useParams } from "react-router-dom"
// import usersReducer from "../reducers/usersReducer"
import { getUser } from '../actions/users'
import {useDispatch} from "react-redux"

export function LoginSuccess(){
     
    return (
        <div>
            {id ? <Redirect to={`/client/${id}`}/> : <h3>Loading</h3>}
        </div>
    )
}


export default LoginSuccess