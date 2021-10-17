import React, { useEffect } from 'react'
import {logout} from "../actions/users"
import {useDispatch} from "react-redux"

function Logout() {

        return (
            <div className="container center">
                <h4 style={{marginTop: "15%"}}>Successfully logged out!</h4> 
            </div>
        )
}

export default Logout
