import React, { Component } from 'react'
import { connect } from 'react-redux'
import  getUserInfoInitially  from '../actions/getUserInfoInitially'
import Loading from './Loading'

export class LoginSuccess extends Component {

    componentDidMount(){
        this.props.getUserInfoInitially(this.props.match.params.token, this.props.history)
    }

    render() {
        if(this.props.usersReducer.requesting){
            return (
                <div>
                    <Loading/>
                </div>
    
            )
        }else{
            <div>
            Successfully logging in with Spotify!
            Redirecting
        </div>
        }
    }
}

const mapStateToProps = ({usersReducer}) => {
    return { usersReducer }
}

export default connect(mapStateToProps, { getUserInfoInitially })(LoginSuccess)
