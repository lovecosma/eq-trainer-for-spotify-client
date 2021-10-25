import React, {useContext} from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../UserProvider";
function ProtectedRoute({ component: Component}) {
    const {loggedIn} = useContext(UserContext)
    if(loggedIn){
        return <Component/>
    } else {
        return <Redirect to="/"/>
    }
}

export default ProtectedRoute;