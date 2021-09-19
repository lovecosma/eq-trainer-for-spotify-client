import React, { Component } from 'react'
import { connect } from "react-redux"
import logout from "../actions/logout"
import {NavLink} from "react-router-dom"



class NavLinks extends Component {
    
     handleClick = () => {
        this.props.logout()
    }
    render(){
        console.log(this.props);
        if(this.props.loggedIn){
            return (
                <div>
                    <li><NavLink to="/">home</NavLink></li>
                    <li><NavLink to="/playground">Playground</NavLink></li>
                    <li><NavLink to="/">Train</NavLink></li>
                    <li><a onClick={this.handleClick}>logout</a></li>
                </div>
            )
        } else {
            return (
                <div>
                    <li><NavLink to="/">home</NavLink></li>
                    <li><a href="http://localhost:3001/login">login</a></li>
                </div>
            )
        }
    }
}

const mapStateToProps = ({usersReducer}) => {
    return {
        user: usersReducer.user,
        requesting: usersReducer.requesting,
        loggedIn: usersReducer.loggedIn
    }
}

export default connect(mapStateToProps, {logout})(NavLinks)

