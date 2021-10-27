import React from 'react'
import { Switch, Route } from "react-router-dom"
import NavBar from './containers/NavBar'
import "./App.css"
import UserProfileContainer from './containers/UserProfileContainer'
import Login from "./components/Login"
import Home from "./components/Home"
import PlaygroundContainer from "./containers/PlaygroundContainer"
import ProtectedRoute from './components/ProtectedRoute'

export function App () {
  
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

