import React from "react";
import '../styles/HomeL.css'
import Gallery from "../components/Gallery.jsx"

function Header(){

    return (
        <div className="container-header-home">
            <div className="container-main-header">
                <div className="frase-header">
                    <div className="texts">
                        <div className="frase">
                            ! make it real
                        </div>
                        <div className="name-tattos">
                            FEBA's tattos House
                        </div>
                        <div className="frase-2">
                            once drwan it's 4 ever
                        </div>
                    </div>
                    <div className="buttons-options">
                        <button className="button">
                            Our draws
                        </button>
                        <button className="button bg-white">
                            Reserva
                        </button>
                    </div>
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