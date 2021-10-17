import React, {useEffect, useReducer} from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import SideNav from "./SideNav"
import { Redirect, useHistory, useParams } from "react-router-dom"
import usersReducer from "../reducers/usersReducer"
import { getUser } from '../actions/users'
import {useDispatch, useSelector} from "react-redux"

export function LoginSuccess({requesting}){
    const history = useHistory()
    const {id} = useParams()
     const dispatch = useDispatch()
     useEffect(() => {
       getUser(dispatch,id, history)
     }, [])
    
    return (
        <div>
            <h3>Loading</h3>
        </div>
    )
}


export default LoginSuccess