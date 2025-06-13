import React, { useState } from 'react';
import '../assets/css/Header.css';

const Header = ({ carritoCount, onAbrirCarrito, onAbrirMenu, busqueda, setBusqueda }) => {
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);

  const toggleBusqueda = () => {
    setMostrarBusqueda(!mostrarBusqueda);
  };

  return (
    <header className="header">
      <div className="izquierda">
        <button className="menu-button" onClick={onAbrirMenu}>
          ☰ Menú
        </button>
      </div>

      <h1 className="titulo">Nuestra Colección</h1>
      

      <div className="derecha">
        <div className={`buscador-container ${mostrarBusqueda ? 'expandido' : ''}`}>
          <button className="lupa" onClick={toggleBusqueda}>🔍</button>
          {mostrarBusqueda && (
            <input
              type="text"
              placeholder="Buscar producto..."
              className="buscador"
              autoFocus
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          )}
        </div>
        <button className="carrito-button" onClick={onAbrirCarrito}>
          🛒 Carrito ({carritoCount})
        </button>
      </div>
    </header>
  );
};

export default Header;
