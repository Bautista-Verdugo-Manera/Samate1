import '../assets/css/ModalMenu.css';

function ModalMenu({ cerrar, filtrar }) {
  const manejarFiltro = (categoria) => {
    filtrar(categoria); // Sin toLowerCase, para que coincida con las categorías del producto
    cerrar();
  };

  return (
    <div className="modal-fondo" onClick={cerrar}>
      <div className="modal-menu" onClick={(e) => e.stopPropagation()}>
        <h2 className="menu-titulo"> Menú de Categorías</h2>
        <ul className="menu-lista">
          <li>
            <button className="menu-btn" onClick={() => manejarFiltro('Todos')}>
              Todos
            </button>
          </li>
          <li>
            <button className="menu-btn" onClick={() => manejarFiltro('Mates')}>
              Mates
            </button>
          </li>
          <li>
            <button className="menu-btn" onClick={() => manejarFiltro('Termos')}>
              Termos
            </button>
          </li>
          <li>
            <button className="menu-btn" onClick={() => manejarFiltro('Yerba')}>
              Yerba
            </button>
          </li>
          <li>
            <button className="menu-btn" onClick={() => manejarFiltro('Bombillas')}>
              Bombillas
            </button>
          </li>
        </ul>
        <button className="cerrar-btn" onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  );
}

export default ModalMenu;
