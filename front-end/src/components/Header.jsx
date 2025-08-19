import React from "react";
import '../styles/HomeL.css'
import Gallery from "../components/Gallery.jsx"

function Header(){

    return (
        <div className="container-header-home">
            <div className="container-main-header">
                <div className="frase-header">
                    FEBA's tattos House
                </div>
                <div className="slide-imagenes">
                    <Gallery 
                    autoplay={true}
                    pauseOnHover={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;