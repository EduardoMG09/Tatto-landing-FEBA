import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import "../styles/TiltedCard.css";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  containerHeight = "400px",
  containerWidth = "350px",
  imageHeight = "400px",
  imageWidth = "350px",
  scaleOnHover = 1.05,
  rotateAmplitude = 14,
  titulo,
  definicion,
  zonas = [],
  tiempo,
  precio,
  paquetes = {},
}) {
  const ref = useRef(null);

  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        {/* Imagen de fondo */}
        <motion.img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {/* Título siempre visible */}
        <div className="tilted-card-title">
          {titulo}
        </div>

        {/* Overlay con info detallada */}
        <motion.div
          className="tilted-card-overlay-content"
          initial={{ opacity: 0, y: 40 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="definicion">
            <h4>Experiencia:</h4>
            <p>{definicion}</p>
          </div>
          <div className="zonas">
            <strong>Zonas:</strong>
            <ul>
              {zonas.map((zona, index) => (
                <li key={index}>{zona}</li>
              ))}
            </ul>
          </div>
          <div className="tiempo">{tiempo}</div>
          <div className="precio">
            <strong>Precio:</strong> {precio}
          </div>
          <div className="paquetes">
            {Object.entries(paquetes).map(([tipo, datos], index) => (
              <div key={index} className="paquete">
                <h5>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h5>
                <p>{datos.descripcion}</p>
                <p><strong>Sesiones:</strong> {datos.sesiones}</p>
                <ul>
                  {datos.incluye.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </figure>
  );
}
