import React from "react";

function Servicio(props){
    return(
        <div className="container-servicio">
            <div className="titulo seccion-servicio">
                {props.titulo}
            </div>
            <div className="des-servicio seccion-servicio">
                <h2>Experiencia:</h2>
                <h3>{props.definicion}</h3>
            </div>
            <div className="zonas-servicio seccion-servicio">
                <strong>Zonas:</strong>
                <ul>
                {Object.entries(props.zonas).map((item,index) =>(
                    <li key={index}>{item}</li>
                    ))
                }
                </ul>
            </div>
            <div className="tiempo-servicio seccion-servicio">
                {props.tiempo}
            </div>
            <div className="precio seccion-servicio">
                <p><strong>Precio:</strong> {props.precio}</p>
            </div>
            <div className="paquetes-servicio seccion-servicio">
                {Object.entries(props.paquetes).map(([tipo, datos], index) => (
                    <div key={index} className="paquete">
                        <h4>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h4>
                        <p className="descripcion-paquete seccion-servicio">{datos.descripcion}</p>
                        
                        <p><strong>Sesiones:</strong> {datos.sesiones}</p>
                        <ul>
                            {datos.incluye.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Servicio;