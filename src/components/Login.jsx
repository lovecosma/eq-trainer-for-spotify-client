import React, { Component } from 'react'

export class Login extends Component {


    render() {
            return (
                <div className="centered_button" >
                    <form action="http://localhost:3001/login_with_spotify" method="get">
                        <button id="btn" type="submit" > Login with Spotify </button> 
                    </form>
                </div>
            )}
    }


export default Login
