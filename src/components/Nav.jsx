import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
                <nav >
                    <div className="nav-wrapper black white-text">
                    <a href="#" className="brand-logo"  style={{marginLeft:"20%"}}>EQ Trainer</a>
                        <ul id="nav-mobile"  className="right hide-on-med-and-down"  style={{marginRight:"20%"}}>
                            <li><NavLink to="http://localhost:3001/login">Home</NavLink></li>
                            <li><a href="http://localhost:3001/login">Login</a></li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default Nav
