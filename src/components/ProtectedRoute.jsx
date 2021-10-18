import React from "react";
import { Redirect, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux"
// function ProtectedRoute({ component: Component}) {
//     const {id} = useParams()
//     const {user} = useSelector(({usersReducer}) => {
//         return{
//             user: usersReducer.user
//         }
//     })
//     return (
//         <div></div>
//     )
// }

// export default ProtectedRoute;