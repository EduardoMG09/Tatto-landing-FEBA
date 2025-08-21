import React from "react";
import Servicio from "./Servicio";
import "../styles/Servicios.css"

function Servicios(){
    const serviciosTatuajes = {
        pequeño: {
            definicion: "Hasta 5 cm aproximadamente",
            zonas: ["Muñeca", "Tobillo", "Detrás de la oreja", "Dedos", "Cuello lateral"],
            tiempo: "30 minutos – 1 hora",
            precio: "A partir de $500.00",
            paquetes: {
            basico: {
                incluye: ["Tatuaje pequeño", "Diseño personalizado simple", "Sesión única"],
                descripcion: "Ideal para tatuajes discretos y rápidos, con diseño sencillo."
            },
            premium: {
                incluye: [
                "Tatuaje pequeño",
                "Diseño detallado o estilo específico",
                "Consulta previa y ajustes de diseño",
                "Fotos profesionales del tatuaje finalizado"
                ],
                descripcion: "Perfecto si quieres un tatuaje pequeño pero con detalles únicos y seguimiento profesional."
            }
            }
        },
        mediano: {
            definicion: "Entre 5 y 15 cm aproximadamente",
            zonas: ["Brazo", "Pierna", "Hombro", "Espalda alta", "Pecho lateral"],
            tiempo: "1 – 3 horas",
            precio: "A partir de $1000.00",
            paquetes: {
            basico: {
                incluye: ["Tatuaje mediano", "Diseño personalizado", "Sesión de 1 a 2 horas"],
                descripcion: "Tatuajes de tamaño medio, ideales para diseños visibles y creativos."
            },
            premium: {
                incluye: [
                "Tatuaje mediano",
                "Diseño detallado o estilo complejo",
                "Consulta previa + hasta 2 ajustes de diseño",
                "Fotos profesionales del tatuaje finalizado"
                ],
                descripcion: "Para quienes buscan un tatuaje mediano con alta personalización y seguimiento profesional."
            }
            }
        },
        grande: {
            definicion: "Más de 15 cm",
            zonas: ["Espalda completa", "Pierna completa", "Pecho completo", "Brazo completo (manga)"],
            tiempo: "3 – 6 horas o más (varias sesiones)",
            precio: "A partir de $1650.00",
            paquetes: {
            basico: {
                incluye: ["Tatuaje grande", "Diseño personalizado", "Sesión según tamaño"],
                descripcion: "Tatuajes de gran tamaño, perfectos para cubrir zonas amplias con un diseño llamativo."
            },
            premium: {
                incluye: [
                "Tatuaje grande",
                "Diseño detallado y estilo personalizado",
                "Consulta previa + múltiples ajustes de diseño",
                "Fotos profesionales y seguimiento de sesiones"
                ],
                descripcion: "Paquete completo para tatuajes grandes, con diseño único y soporte durante todas las sesiones."
            }
            }
        }
    };

    return(
        <div className="container-servicios">
            <div className="titulo-servicios">
                Servicios
            </div>
            <div className="servicios-cards">
                {
                    Object.entries(serviciosTatuajes).map(([item,info],index) => (
                        <Servicio 
                        key={index}
                        titulo={item}
                        definicion= {info.definicion}
                        zonas= {info.zonas}
                        tiempo= {info.tiempo}
                        precio= {info.precio}
                        estiloSugerido={info.estiloSugerido}
                        paquetes= {info.paquetes}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Servicios;