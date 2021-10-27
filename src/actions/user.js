import {getCookie, setCookie} from "./cookies"

export const login = (dispatch, user) => {
    dispatch({type: "REQUESTING_LOGIN"})
    dispatch({type: "LOGIN", user})
}