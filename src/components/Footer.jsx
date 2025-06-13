import React, { useState } from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
} from 'react-icons/fa';
import '../assets/css/Footer.css';

function Footer() {
  const [mostrarSobreNosotros, setMostrarSobreNosotros] = useState(false);

  const toggleSobreNosotros = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace
    setMostrarSobreNosotros(!mostrarSobreNosotros);
  };

  return (
    <footer className="footer">
      <div className="footer-contenedor">
        {/* Sección 1 */}
        <div>
          <h2>Tienda de Mates</h2>
          <p>Mates de calidad, bombillas y accesorios. Calidad garantizada.</p>
        </div>

        {/* Sección 2 */}
        <div>
          <h2>Enlaces útiles</h2>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li>
              <a href="#" onClick={toggleSobreNosotros}>
                Sobre nosotros
              </a>
              {mostrarSobreNosotros && (
                <div className="descripcion-sobre-nosotros" style={{marginTop: '10px'}}>
                  <p><strong>Bautista Verdugo Manera:</strong> Hola,tengo 17 años edad, estoy en 6to año en la division C, de informatica e hice esta pagina web junto con Sara. Soy fundador y diseñador del proyecto, me gustan los mates artesanales.</p>
                  <p><strong>Sara Amsler Ayassa:</strong> Hola,tengo 17 años de edad, estoy en 6to año en la division C de informatica y colabore con la creacion de la pagina web. Soy cofundadora y responsable de marketing y atención al cliente, apasionada por los mates.</p>
                </div>
              )}
            </li>
            <li>
              <a
                href="https://wa.me/5493541555172"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Sección 3: Redes */}
        <div>
          <h2>Seguinos</h2>
          <div className="footer-redes">
            <a
              href="https://www.instagram.com/samate.artesanias"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/5493541555172"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.tiktok.com/@samate.artesanias"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="footer-creditos">
        &copy; 2025 Tienda de Mates. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
