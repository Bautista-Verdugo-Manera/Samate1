import '../assets/css/Producto.css';

function Producto({ producto, agregarAlCarrito }) {
  return (
    <div className="card-producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      {/* Descripción del producto */}
      <p className="descripcion-producto">{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <button className="boton-agregar" onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default Producto;

