import React from "react";
import "../styles/Home.css";

function Navbar({ onGoHome, onGoGaleria, onGoServicios }) {
  return (
    <div className="contenedor-navbar-home">
      <div className="itemsnavbar-2">
        <button className="item-navbar-2" onClick={onGoHome}>Home</button>
        <button className="item-navbar-2" onClick={onGoGaleria}>Galería</button>
        <button className="item-navbar-2" onClick={onGoServicios}>Servicios</button>
      </div>
    </div>
  );
}

export default Navbar;
