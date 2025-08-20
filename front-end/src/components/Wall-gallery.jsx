import React from "react";
import w1 from "/w1.jpg";
import w2 from "/w2.jpg";
import w3 from "/w3.jpg";
import w4 from "/w4.jpg";
import w5 from "/w5.jpg";
import w6 from "/w6.jpg";
import w7 from "/w7.jpg";
import w8 from "/w8.jpg";
import w9 from "/w9.jpg";
import w10 from "/w10.jpg";
import w11 from "/w11.jpg";
import w12 from "/w12.jpg";
import w13 from "/w13.jpg";
import w14 from "/w14.jpg";
import w15 from "/w15.jpg";
import w16 from "/w16.jpg";

import "../styles/Galeria.css";

function WallGallery(){
    const imagenes = [w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16];

    return(
        <div className="wall-container">
        {
            imagenes.map((item,index) =>(    
            <div className="wall-img" key={index}>
                <img src={item} alt="" />
            </div>
            ))
        }    
        </div>
    )
}

export default WallGallery;