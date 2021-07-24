import React from "react";
import {FaCartArrowDown} from "react-icons/fa"

const menuItems = [
    {
        id : 1 ,
        name : "Home",
        url : "/"
    },
    {
        id : 2 ,
        name : "About",
        url : "/about"
    },
    {
        id : 3 ,
        name : "Services",
        url : "/services"
    },
    {
        id : 4 ,
        name : "Contact",
        url : "/contact"
    },
    {
        id : 5 ,
        name : <FaCartArrowDown className="cart-icon"/>,
        url : "/cart"
    }
]

export default menuItems;