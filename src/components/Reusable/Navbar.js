import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../images/logo.png'
import menuItems from './menuItems'

export default class Navbar extends Component {

    state={
        navbarState : false ,
        navbarClass : "collapse navbar-collapse",
        menus : menuItems
    }

    myToggler = () => {
        this.state.navbarState ? this.setState({
            navbarState : false ,
            navbarClass : "collapse navbar-collapse"
        }) :
        this.setState({
            navbarState : true ,
            navbarClass : "collapse navbar-collapse show"
        })
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <Link to="/" className="navbar-brand ml-5">
                    <img src={logo} alt="logo goes here" width="40px" />
                </Link>     
                <button onClick={this.myToggler} className="navbar-toggler" type="button">
                    <span className="text-white">Menu</span>
                </button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                    {this.state.menus.map(menu => {
                        return (
                            <li key={menu.id} className="nav-item">
                            <Link to={menu.url} className="nav-link text-white">
                                {menu.name}
                            </Link>
                        </li>
                        )
                    })}
                    </ul>
                </div>
            </nav>
        )
    }
}
