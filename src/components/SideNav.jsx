import React, { Component } from 'react'
import M from 'materialize-css';
import Nav from "./Nav"
import { NavLink } from 'react-router-dom';


export class SideNav extends Component {

    componentDidMount(){
        let elems = document.querySelectorAll('.sidenav');
        let instances = M.Sidenav.init(elems);
       }

       componentDidUpdate(){
        let elems = document.querySelectorAll('.sidenav');
        let instances = M.Sidenav.init(elems);
       }

    render() {
        
        return (
        <div style={{display: "flex"}}>
                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                    </div>
                    <a href="#user"></a>
                    <a href="#name"><span className="white-text name">John Doe</span></a>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                    <span style={{padding: "15px"}}><a href="#" data-target="slide-out" class="sidenav-trigger"><img src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"/></a></span>
                <nav >

                    <div className="nav-wrapper black white-text">

                    <a href="#" className="brand-logo"  style={{marginLeft:"20%"}}>EQ Trainer</a>
                        <ul id="nav-mobile"  className="right hide-on-med-and-down"  style={{marginRight:"20%"}}>
                            <li><a href="http://localhost:3000/">Home</a></li>
                            <li><a href="http://localhost:3000/login">Login</a></li>
                        </ul>
                    </div>
                </nav>
        



                

            </div>

        )
    }
}

export default SideNav
