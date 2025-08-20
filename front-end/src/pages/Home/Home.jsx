import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar"
import Galeria from "../../components/Galeria"
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
        </div>
    )
}

export default Home;