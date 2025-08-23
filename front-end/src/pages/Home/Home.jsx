import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import NavbarMobile from "../../components/MobileNavbar";
import Galeria from "../../components/Galeria";
import Servicios from "../../components/Servicios";

import "../../styles/HomeL.css";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-container-main">
      <div className="nvbar">
        {isMobile ? <NavbarMobile /> : <Navbar />}
      </div>
      <div className="header" id="header">
        <Header />
      </div>
      <div className="galeria" id="galeria">
        <Galeria />
      </div>
      <div className="servicios" id="servicios">
        <Servicios />
      </div>
    </div>
  );
}

export default Home;
