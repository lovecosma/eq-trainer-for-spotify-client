import React, {useEffect, useReducer} from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import SideNav from "./SideNav"
import { Redirect, useParams } from "react-router-dom"
import usersReducer from "../reducers/usersReducer"
import { getUser } from '../actions/users'

export function LoginSuccess(){

    
    console.log(user)
    return (
        <div>
            {user.id ? <Redirect to={`user/${user.id}`}/> : <Loading/>}
        </div>
    )
}


export default LoginSuccess