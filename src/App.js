import React, {useContext, useEffect} from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from './components/NavBar'
import "./App.css"
import UserProfile from './components/user/UserProfile'
import Login from "./components/Login"
import LoginSuccess from "./components/LoginSuccess"
import Home from "./components/Home"
import { UserContext } from './UserProvider'
import Playground from "./components/Playground"
import ProtectedRoute from './components/ProtectedRoute'
export function App () {
  
      return (
           <div>
              <NavBar/>
              <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path="/users/:id/initialize"><LoginSuccess/></Route>
                <Route exact path="/users/:id"><UserProfile/></Route>
                <Route exact path="/playground" ><ProtectedRoute component={Playground}/></Route>
                <Route exact path='/' component={Home}/>
              </Switch>

           </div>
          )
  }




export default App

