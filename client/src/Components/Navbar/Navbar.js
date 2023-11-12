// Navbar.js
import React from 'react';
import './Navbar.css'; // Importa el archivo CSS

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        Logo
      </a>
      <ul className="navbar-links">
        <li className="navbar-link">
          <a href="/">Inicio</a>
        </li>
        <li className="navbar-link">
          <a href="/sobrenosotros">Quiénes Somos</a>
        </li>
        <li className="navbar-link">
          <a href="#footer">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
