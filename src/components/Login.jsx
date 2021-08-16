import React, { Component } from 'react'
export class Login extends Component {


    render() {
            return (
                <div className="centered_button" >
                    <form action="http://localhost:3000/login" method="get">
                        <button id="btn" type="submit" > Login tihe Spotify </button> 
                    </form>
                   
                </div>
            )}
    }


export default Login
