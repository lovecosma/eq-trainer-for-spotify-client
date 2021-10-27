import React, {useContext, useEffect} from 'react'
import {useParams, useHistory } from "react-router-dom"

export function LoginSuccess(){

   
    const {id} = useParams()
    const history = useHistory()

    const fetchExistingUser = async () => {
        // history.push(`/playground`)
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    useEffect(() => {
        let userCookie = getCookie("user")
        if(userCookie !== ""){
            let user = JSON.parse(userCookie)
            debugger
        }
       fetchExistingUser()
    }, [])
 

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}


export default LoginSuccess