import React from "react";
import WallGallery from "./Wall-gallery";

function Galeria(){
    return(
        <div className="container-galeria">
            <div className="titulo">
                <div className="sub">
                    My Gallery
                </div>
                <div className="sub-2">
                    just come up with it, i will bring it out
                </div>
            </div>
            <div className="wall">
                <WallGallery/>
            </div>
        </div>
    )
}

export default Galeria;