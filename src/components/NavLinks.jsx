import React, { Component } from 'react'
import { connect } from "react-redux"
import logout from "../actions/logout"
import history from '../history';



class NavLinks extends Component {
    
     handleClick = () => {
        this.props.logout()
    }
    render(){
        if(this.props.user.id){
            return (
                <div>
                    <li><a href="http://localhost:3000/">home</a></li>
                    <li><a href="#">Playground</a></li>
                    <li><a href="#">Train</a></li>
                    <li><a onClick={this.handleClick}>logout</a></li>
                </div>
            )
        } else {
            return (
                <div>
                    <li><a href="http://localhost:3000/">home</a></li>
                    <li><a href="http://localhost:3001/login">login</a></li>
                </div>
            )
        }
    }
}

const mapStateToProps = ({usersReducer}) => {
    return {
        user: usersReducer.user
    }
}

export default connect(mapStateToProps, {logout})(NavLinks)

