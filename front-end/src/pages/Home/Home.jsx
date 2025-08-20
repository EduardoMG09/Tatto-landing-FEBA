import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar"
import Galeria from "../../components/Galeria"
import Servicios from "../../components/Servicios"

import "../../styles/HomeL.css"

function Home(){
    return(
        <div className="home-container-main">
            <div className="nvbar">
                <Navbar/>
            </div>
            <div className="header">
                <Header />
            </div>
            <div className="galeria">
                <Galeria />
            </div>
            <div className="servicios">
                <Servicios />
            </div>
        </div>
    )
}

export default Home;