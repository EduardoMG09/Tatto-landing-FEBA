import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function NavbarLanding(){
    const opciones = {
        "Home":"/home",
    }

    return(
        <div className="contenedor-navbar">
            <div className="itemsnavbar">
                {
                    Object.entries(opciones).map( ([item,info],index)=>(
                        <Link to={info}>
                            <div key={index} className="item-navbar">{item}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default NavbarLanding;