import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from "./Loading"
import M from 'materialize-css';
import {Redirect} from "react-router"
import Playground from "./Playground"
export class UserHome extends Component {
     

    componentDidMount(){
       }

   
    render() {
        if(this.props.requesting){
           return <div></div> 
        }else {
      
        //   if(this.props.user.id){
        //     let { user } = this.props
        //     let playlists = user.playlists.map(playlist => {
        //         return <li>{playlist.name}</li>
        //     })
            return (
                <div>
                <div className="black" style={{marginTop: "5%"}}>
                    <div>
                        <h4 style={{padding: "25px"}}>Use your ears...</h4>
                        <Playground/>
                    </div>
                </div>
            </div> 
                )
          } 
        }
    }


const mapStateToProps = ({usersReducer}) => {
    return {
        requesting: usersReducer.requesting,
        user: usersReducer.user
    }
}

export default connect(mapStateToProps, {})(UserHome)
