import React, {useEffect, useReducer} from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import SideNav from "./SideNav"
import { useParams } from "react-router-dom"
import usersReducer from "../reducers/usersReducer"
import { getUser } from '../actions/users'

export function LoginSuccess(){

    const { id } = useParams()
     const [state, dispatch] = useReducer(usersReducer, {loggedIn: false, user: {},  requesting: false})
    useEffect(() => {
        getUser(dispatch, id)
    }, [])
}


export default LoginSuccess