import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login"
import Home from "./components/Home"
// import UserHome from './components/UserHome'
import "./App.css"
import Loading from "./components/Loading"
import LoginSuccess from './components/LoginSuccess'
import getUserInfo from './actions/getUserInfo'
import { connect } from 'react-redux'
import SideNav from "./components/SideNav"
import usersReducer from './reducers/usersReducer';
import history from './history';
import getTopTracksArt from "./actions/getTopTracksArt"
import Logout from "./components/Logout"
import Playground  from './components/Playground';
import UserHome from "./components/user/UserHome"
export class App extends Component {
  

  componentDidMount(){
    let user = localStorage.getItem("user")
    if(user){
      this.props.getUserInfo(user)
    }
  }


  render() {
       return (
        <div>
              <div>
                  <Router history={history} >  
                    <SideNav />
                    <Switch>
                        <Route exact path='/' render={(routerProps) => <Home {...routerProps} />} />
                        <Route path="/:user_name"><UserHome/></Route>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/logout' component={Logout} />
                        <Route exact path='/playground' render={(routerProps) => <Playground {...routerProps} />} />
                    </Switch>
                </Router> 
              </div>
        </div>
      )
    }
  }


const mapStateToProps = ({usersReducer}) => {
  return {
    user : usersReducer.user
  }
}

export default connect(mapStateToProps, {getUserInfo, getTopTracksArt})(App)

