import React, { useState } from "react";
import "../styles/NavbarMobile.css";

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-mobile">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "active" : ""}`}></div>
        <div className={`bar ${isOpen ? "active" : ""}`}></div>
        <div className={`bar ${isOpen ? "active" : ""}`}></div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="#header" onClick={toggleMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#galeria" onClick={toggleMenu}>
                Galería
              </a>
            </li>
            <li>
              <a href="#servicios" onClick={toggleMenu}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={toggleMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
