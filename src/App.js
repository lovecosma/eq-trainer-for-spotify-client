import React, {useEffect} from 'react'
import { Switch, Route } from "react-router-dom"
import NavBar from './containers/NavBar'
import "./App.css"
import UserProfileContainer from './containers/UserProfileContainer'
import Login from "./components/Login"
import Home from "./components/Home"
import PlaygroundContainer from "./containers/PlaygroundContainer"
import ProtectedRoute from './components/ProtectedRoute'
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {checkCookie} from "./actions/cookies"
import {login} from "./actions/user"
import Loading from "./components/Loading"

export function App () {

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    let userData = checkCookie()
    !!userData ? login(dispatch, userData) : history.push("/login")
}, [dispatch, history])

      return (
           <div>
              <NavBar/>
                <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path="/users/:id"><ProtectedRoute component={UserProfileContainer}/></Route>
                <Route exact path="/users/:id/playground" ><ProtectedRoute component={PlaygroundContainer}/></Route>
                <Route exact path='/' component={Home}/>
              </Switch>
           </div>
          )
  }




export default App

