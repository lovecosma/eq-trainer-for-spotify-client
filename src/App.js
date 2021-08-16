import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav' 
import Login from "./components/Login"
import Home from "./components/Home"
import UserHome from './components/UserHome'
import "./App.css"
import Loading from "./components/Loading"
import LoginSuccess from './components/LoginSuccess'
import getUserInfo from './actions/getUserInfo'
import { connect } from 'react-redux'
export class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <Switch>
          <div >
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/login_success/:token' render={(routerProps) => <LoginSuccess {...routerProps} />}/>
            <Route exact path='/success' render={(routerProps) => <UserHome {...routerProps} />}/>
            <Route exact path='/loading' component={Loading} />
          </div>
        </Switch>
      </Router> 
      </div>
    )
  }
}

export default connect(null, {getUserInfo})(App)

