import React from "react";
import "../../styles/Home.css";
import ShinyText from '../../components/ShinyText.jsx';

function Home(){
    return(
        <div className="container">
            <div className="container-home">
                <div className="container-main">
                    <div className="negocio-nombre">
                        <div className="card">
                            <h1 className="heading">
                                <ShinyText>FEBA's Tattos House</ShinyText>
                            </h1>
                        </div>
                    </div>
                    <div className="contenido">
                        <div className="navbar">

                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Home;