import React, { Component } from 'react'
import M from 'materialize-css';
import Nav from "./Nav"
import NavLinks from "./NavLinks"
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import logout from "../actions/logout"


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
                <ul id="slide-out" class="sidenav">
                <li><div class="user-view">
                <div class="background">
                   {this.props.user ?  <img src={this.props.user.image_url}/> :  <img src="images/office.jpg"/>}
                </div>
                <a href="#user"><img class="circle" src={this.props.user.image_url}/></a>
                <a href="#name"><span class="white-text name">John Doe</span></a>
                <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                </div></li>
                <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div class="divider"></div></li>
                <li><a class="subheader">Subheader</a></li>
                <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
                    <span style={{padding: "15px"}}><a href="#" data-target="slide-out" class="sidenav-trigger"><img src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"/></a></span>
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
