import React, { Component } from 'react'
import SideNav from "./SideNav"

export class Login extends Component {


    render() {
            return (
              <div>
                <div className="centered_button" >
                    <form action="http://localhost:3001/login" method="get">
                        <button id="btn" type="submit" > Login tihe Spotify </button> 
                    </form>
                   
                </div>
              </div>
            )}
    }


export default Login
