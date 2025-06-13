import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import '../assets/css/Checkout.css';

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const carrito = location.state?.carrito || [];

  const productos = carrito.length > 0 ? carrito : [];
  const total = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [confirmado, setConfirmado] = useState(false);

  const handleMetodoChange = (e) => {
    setMetodoPago(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono) {
      alert('Por favor, completá todos los datos personales.');
      return;
    }

    if (metodoPago === '') {
      alert('Por favor, seleccioná un método de pago.');
      return;
    }

    setConfirmado(true);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Finalizar Compra</h1>

      {!confirmado && (
        <button
          className="btn-volver"
          onClick={() => navigate(-1, { state: { carrito } })}
        >
          ← Volver
        </button>
      )}

      {!confirmado ? (
        <>
          <section className="resumen-compra">
            <h2>Resumen de tu compra</h2>
            <ul>
              {productos.map((prod, i) => (
                <li key={i} className="resumen-item">
                  <span>{prod.nombre} x {prod.cantidad}</span>
                  <span>${prod.precio * prod.cantidad}</span>
                </li>
              ))}
            </ul>
            <div className="resumen-total">
              <strong>Total: ${total}</strong>
            </div>
          </section>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => {
                const soloLetras = e.target.value.replace(/[^a-zA-ZÁÉÍÓÚáéíóúÑñ\s]/g, '');
                setNombre(soloLetras);
              }}
              pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
              title="Solo se permiten letras"
              required
            />

            <label className="form-label">Apellido:</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => {
                const soloLetras = e.target.value.replace(/[^a-zA-ZÁÉÍÓÚáéíóúÑñ\s]/g, '');
                setApellido(soloLetras);
              }}
              pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
              title="Solo se permiten letras"
              required
            />

            <label htmlFor="telefono" className="form-label">Teléfono:</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              maxLength="10"
              pattern="\d{10}"
              inputMode="numeric"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value.replace(/\D/g, ''))}
              required
            />

            <label className="form-label metodo-label">Seleccioná el método de pago:</label>
            <div className="metodos-pago-cards">
              <label htmlFor="transferencia" className={`card-pago ${metodoPago === 'transferencia' ? 'card-selected' : ''}`}>
                <input
                  type="radio"
                  id="transferencia"
                  name="metodoPago"
                  value="transferencia"
                  checked={metodoPago === 'transferencia'}
                  onChange={handleMetodoChange}
                />
                <div className="card-content">
                  <h3>Transferencia Bancaria</h3>
                  <p>Pagá mediante transferencia directa a nuestra cuenta bancaria.</p>
                </div>
              </label>

              <label htmlFor="efectivo" className={`card-pago ${metodoPago === 'efectivo' ? 'card-selected' : ''}`}>
                <input
                  type="radio"
                  id="efectivo"
                  name="metodoPago"
                  value="efectivo"
                  checked={metodoPago === 'efectivo'}
                  onChange={handleMetodoChange}
                />
                <div className="card-content">
                  <h3>Efectivo</h3>
                  <p>Pagá en efectivo al momento de la entrega o retiro.</p>
                </div>
              </label>
            </div>

            {metodoPago === 'transferencia' && (
              <div className="transferencia-datos">
                <h3>Datos para Transferencia</h3>
                <p><strong>Mercado Pago</strong></p>
                <p><strong>Titular:</strong> Carolina Ayassa Soler</p>
                <p><strong>CBU:</strong> 1234567890123456789012</p>
                <p>Enviá el comprobante a <a href="mailto:bautistaverdugo@iresm.edu.ar">bautistaverdugo@iresm.edu.ar</a></p>
              </div>
            )}

            <button type="submit" className="btn-confirmar">Confirmar Pago</button>
          </form>
        </>
      ) : (
        <>
          <div className="ticket-final">
            <h2>¡Gracias por tu compra, {nombre} {apellido}!</h2>
            <p>Teléfono: {telefono}</p>
            <p>Tu pago fue confirmado mediante <strong>{metodoPago === 'transferencia' ? 'Transferencia Bancaria' : 'Efectivo'}</strong>.</p>

            <div className="ticket-detalle">
              <h3>Detalle de la compra:</h3>
              <ul>
                {productos.map((prod, i) => (
                  <li key={i}>
                    {prod.nombre} x {prod.cantidad} = ${prod.precio * prod.cantidad}
                  </li>
                ))}
              </ul>
              <p><strong>Total: ${total}</strong></p>
            </div>

            {metodoPago === 'transferencia' && (
              <div className="ticket-transferencia">
                <h4>Datos de pago:</h4>
                <p><strong>Titular:</strong> Carolina Ayassa Soler</p>
                <p><strong>CBU:</strong> 1234567890123456789012</p>
                <p>Enviá el comprobante a <a href="mailto:bautistaverdugo@iresm.edu.ar">bautistaverdugo@iresm.edu.ar</a></p>
              </div>
            )}

            <button
              className="btn-seguir-comprando"
              onClick={() => navigate('/')}
            >
              Volver a la tienda
            </button>

            <a
              href={`https://wa.me/+543512359563?text=${encodeURIComponent(
                `Hola, vengo de la tienda online y te envío el comprobante de pago. Nombre: ${nombre} ${apellido}. Teléfono: ${telefono}. Total: $${total}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FaWhatsapp style={{ color: '#25D366', fontSize: '20px' }} />
              Enviar comprobante de pago
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
