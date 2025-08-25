import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import NavbarMobile from "../../components/MobileNavbar";
import Galeria from "../../components/Galeria";
import Servicios from "../../components/Servicios";
import "../../styles/HomeL.css";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 1) Refs para cada sección
  const headerRef = useRef(null);
  const galeriaRef = useRef(null);
  const serviciosRef = useRef(null);

  const goTo = (ref) => ref?.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home-container-main">
      <div className="nvbar">
        {isMobile ? (
          <NavbarMobile
            onGoHome={() => goTo(headerRef)}
            onGoGaleria={() => goTo(galeriaRef)}
            onGoServicios={() => goTo(serviciosRef)}
          />
        ) : (
          <Navbar
            onGoHome={() => goTo(headerRef)}
            onGoGaleria={() => goTo(galeriaRef)}
            onGoServicios={() => goTo(serviciosRef)}
          />
        )}
      </div>

      {/* 2) Asigna las refs a los contenedores raíz de cada sección */}
      <div className="header" id="header" ref={headerRef}>
        <Header />
      </div>
      <div className="galeria" id="galeria" ref={galeriaRef} style={{ scrollMarginTop: 72 }}>
        <Galeria />
      </div>
      <div className="servicios" id="servicios" ref={serviciosRef} style={{ scrollMarginTop: 72 }}>
        <Servicios />
      </div>
    </div>
  );
}

export default Home;
