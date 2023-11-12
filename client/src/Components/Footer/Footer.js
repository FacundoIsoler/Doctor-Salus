// Footer.js
import React from 'react';
import './Footer.css'; // Importa el archivo CSS

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer-section">
                <h3>¡No esperes más para resolver tus dudas y problemas!</h3>
                <span>Nuestro equipo de expertos está listo para ayudarte. Experimenta un servicio de atención al cliente de primera clase.
                </span>
            </div>
            <div className="divider"></div> {/* Línea divisoria */}
            <div className="footer-section">
                <h3>Contacto</h3>
                <ul className="contact-info">
                    <li className="contact-info-item">
                        <div className="contact-info-icon">📞</div>
                        <div>123-456-789</div>
                    </li>
                    <li className="contact-info-item">
                        <div className="contact-info-icon">✉️</div>
                        <div>info@example.com</div>
                    </li>
                </ul>
            </div>
            <div className="divider"></div> {/* Línea divisoria */}
            <div className="footer-section dudas-frecuentes">
                <span>Dudas Frecuentes</span>
            </div>
        </footer>
    );
}

export default Footer;
