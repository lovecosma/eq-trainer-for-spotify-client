import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from "./Loading"
import getUserInfo from "../actions/getUserInfo"
import SideNav from './SideNav'
import M from 'materialize-css';

export class UserHome extends Component {
     

    componentDidMount(){
        if(this.props.location.state.user){
            this.props.getUserInfo(this.props.location.state.user.id)
        }
       }

   
    render() {
        if(this.props.requesting){
           return <div><Loading/></div> 
        }else {
      
            let { user } = this.props
            let playlists = user.playlists.map(playlist => {
                return <li>{playlist.name}</li>
            })
            return (
                <div>
                    <h1>Welcome {user.display_name}</h1>
                    <ul>
                    { playlists }
                    </ul>
                </div> 
                )
        }
    }
}

const mapStateToProps = ({usersReducer}) => {
    return usersReducer
}

export default connect(mapStateToProps, {getUserInfo})(UserHome)
