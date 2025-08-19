import React from "react";
import '../styles/HomeL.css'
import Navbar from "./Navbar";
import img from "/alas-tatuaje.png"

function Header(){
    return (
        <div className="container-home-2">
            <div className="container-header">
                <div className="navbar-home">
                    <Navbar/>
                </div>
                <div className="imagen-header">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;