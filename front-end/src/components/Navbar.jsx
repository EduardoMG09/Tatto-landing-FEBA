import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Navbar(){
    const opciones = {
        "Home":"/home",
        "Catalogo":"/catalogo",
        "Agenda":"/agenda",
        "Contacto":"/contacto"
    }

    return(
        <div className="contenedor-navbar-home">
            <div className="itemsnavbar-2">
                {
                    Object.entries(opciones).map( ([item,info],index)=>(
                        <Link to={info}>
                            <div key={index} className="item-navbar-2">{item}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar;