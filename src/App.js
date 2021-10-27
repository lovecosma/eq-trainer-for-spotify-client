import React, {useContext, useEffect} from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from './components/NavBar'
import "./App.css"
import UserProfileContainer from './components/user/UserProfileContainer'
import Login from "./components/Login"
import LoginSuccess from "./components/LoginSuccess"
import Home from "./components/Home"
import Playground from "./components/Playground"
import ProtectedRoute from './components/ProtectedRoute'
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {checkCookie} from "./actions/cookies"
import {login} from "./actions/user"
export function App () {

  const history = useHistory()
  const {loggedIn} = useSelector(({usersReducer}) => {
    return {
      loggedIn: usersReducer.loggedIn
    }
  })
  const dispatch = useDispatch()
 
  useEffect(() => {
    if(!loggedIn){
        let userData = checkCookie()
        !!userData ? login(dispatch, userData) : history.push("/login")
    }
  }, [dispatch, history, loggedIn])

  
      return (
           <div>
              <NavBar/>
              <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path="/users/:id/initialize"><LoginSuccess/></Route>
                <Route exact path="/users/:id"><UserProfileContainer/></Route>
                <Route exact path="/playground" ><ProtectedRoute component={Playground}/></Route>
                <Route exact path='/' component={Home}/>
              </Switch>
           </div>
          )
  }




export default App

