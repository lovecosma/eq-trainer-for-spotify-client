import React, { Component } from 'react'
import M from 'materialize-css';
import Nav from "./Nav"
import NavLinks from "./NavLinks"
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import logout from "../actions/logout"
import mixer from "../mixer.jpeg"

 class SideNav extends Component {

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
                    <img width="300px" height="200px" src={mixer}/> 
                </div>
                {this.props.user.id ? <a href="#user"><img className="circle" style={{height: "125px", width: "125px"}} src={this.props.user.image_url}/></a> : <div></div>}
                <h5>{this.props.user.display_name}</h5>
                </div></li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
                    <span style={{padding: "15px"}}><a href="#" data-target="slide-out" className="sidenav-trigger"><img src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"/></a></span>
                <nav >

                    <div className="nav-wrapper black white-text">

                    <a href="http://localhost:3000/" className="brand-logo"  style={{marginLeft:"20%"}}>EQ Trainer</a>
                        <ul id="nav-mobile"  className="right hide-on-med-and-down"  style={{marginRight:"20%"}}>
                           <NavLinks/>
                        </ul>
                    </div>
                </nav>
        



                

            </div>

        )
    }
}

const mapStateToProps = ({usersReducer}) => {
    return {
        user: usersReducer.user
    }
}

export default connect(mapStateToProps, { logout })(SideNav)
