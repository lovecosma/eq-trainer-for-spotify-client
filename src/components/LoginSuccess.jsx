import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import SideNav from "./SideNav"

export class LoginSuccess extends Component {

    componentDidMount(){
    }

    render() {
        if(this.props.usersReducer.requesting){
            return (
                <div >
                    <Loading/>
                </div>
            )
        }else{
        return(
            <div>
            Successfully logging in with Spotify!
            Redirecting
            </div>
        )
        }
    }
}

const mapStateToProps = ({usersReducer}) => {
    return { usersReducer }
}

export default LoginSuccess