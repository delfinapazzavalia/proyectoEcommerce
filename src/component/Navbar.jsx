import React, { useState } from 'react';
import './navbar.css'; // Archivo de estilos para personalizar el navbar

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__title">
        <h1>Título del Navbar</h1>
      </div>
      <button className="navbar__toggle" onClick={handleMenuToggle}>
        Menu
      </button>
      <ul className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
        <li className="navbar__item">
          <a href="#seccion1">Sección 1</a>
        </li>
        <li className="navbar__item">
          <a href="#seccion2">Sección 2</a>
        </li>
        <li className="navbar__item">
          <a href="#seccion3">Sección 3</a>
        </li>
        <li className="navbar__item">
          <a href="#seccion4">Sección 4</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
