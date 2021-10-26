import React, {useContext, useEffect} from "react";
import { Redirect, useParams } from "react-router-dom";
import { UserContext } from "../UserProvider";

function ProtectedRoute({ component: Component}) {
    const {user, loggedIn, getCookie, fetchUser} = useContext(UserContext)  

    // useEffect(() => {
    //    if(!loggedIn){
    //     let user_id = JSON.parse(getCookie("user"))
    //     if(user_id !== ""){
    //         fetchUser(user_id)
    //     }
    //    }
    // }, [loggedIn])
     
    if(loggedIn){
        return <Component/>
    } else {
        return <Redirect to="/"/>
    }
}

export default ProtectedRoute;