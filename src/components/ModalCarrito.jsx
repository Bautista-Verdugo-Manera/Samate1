import '../assets/css/ModalCarrito.css';
import { useNavigate } from 'react-router-dom';

function ModalCarrito({
  carrito,
  eliminarDelCarrito,
  vaciarCarrito,
  cerrar,
  aumentarCantidad,
  disminuirCantidad
}) {
  const navigate = useNavigate();

  const total = carrito.reduce((sum, prod) => sum + prod.precio * prod.cantidad, 0);

  const irAlCheckout = () => {
    cerrar();  // Cierra el modal antes de navegar
    navigate('/checkout', { state: { carrito } }); // ✅ ENVÍA EL CARRITO
  };

  return (
    <div className="modal-fondo" onClick={cerrar}>
      <div className="modal-carrito" onClick={(e) => e.stopPropagation()}>
        <h2>Tu Carrito 🛒</h2>
        {carrito.length === 0 ? (
          <p>Está vacío.</p>
        ) : (
          <>
            <ul>
              {carrito.map((producto, index) => (
                <li key={index}>
                  <div className="item-info">
                    <span>{producto.nombre}</span>
                    <span>${producto.precio} x {producto.cantidad}</span>
                  </div>
                  <div className="item-controles">
                    <button onClick={() => disminuirCantidad(index)}>-</button>
                    <span>{producto.cantidad}</span>
                    <button onClick={() => aumentarCantidad(index)}>+</button>
                    <button onClick={() => eliminarDelCarrito(index)} className="btn-basura">
                      <img src="/img/basura.png" alt="Eliminar" className="icono-basura" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Total: ${total}</h3>
            <div className="botones-carrito">
              <button className="vaciar-btn" onClick={vaciarCarrito}>Vaciar Carrito</button>
              <button className="finalizar-btn" onClick={irAlCheckout}>
                Finalizar Compra
              </button>
              <button className="cerrar-btn" onClick={cerrar}>Cerrar</button>
            </div>
          </>
        )}
        {carrito.length === 0 && (
          <div className="botones-carrito">
            <button className="cerrar-btn" onClick={cerrar}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalCarrito;
