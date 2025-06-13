import { useState, useEffect } from 'react';
import Producto from './Producto';
import ModalCarrito from './ModalCarrito';
import ModalMenu from './ModalMenu';
import Header from './Header';

import '../assets/css/Header.css';
import '../assets/css/PaginaInicio.css';

function PaginaInicio() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    if (categoriaSeleccionada) {
      setCargando(true);
      const timer = setTimeout(() => setCargando(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [categoriaSeleccionada]);

  const productosDefault = [
    { nombre: 'Mate Camionero de Algarrobo', precio: 12000, imagen: '/public/img/Mate-Camionero1.png', categoria: 'Mates', subcategoria: 'Camionero', descripcion: 'Mate tradicional de madera de algarrobo, resistente y con diseño clásico.' },
    { nombre: 'Mate Camionero de Cuero y Acero', precio: 27000, imagen: '/img/Mate-Camionero.png', categoria: 'Mates', subcategoria: 'Camionero', descripcion: 'Mate con recubrimiento de cuero y acero inoxidable, ideal para uso diario.' },
    { nombre: 'Mate de Imperial Virola Lisa', precio: 29000, imagen: '/img/Mate-Imperial1.png', categoria: 'Mates', subcategoria: 'Imperial', descripcion: 'Elegante mate imperial con virola lisa, diseño fino y durable.' },
    { nombre: 'Mate Torpedo de Cuero y Acero', precio: 27000, imagen: '/img/Mate-Torpedo.png', categoria: 'Mates', subcategoria: 'Torpedo', descripcion: 'Mate estilo torpedo con detalles en cuero y acero, moderno y cómodo.' },
    { nombre: 'Mate Imperial de Algarrobo', precio: 18000, imagen: '/img/Mate-Imperial2.png', categoria: 'Mates', subcategoria: 'Imperial', descripcion: 'Mate imperial fabricado en algarrobo, robusto y con buen acabado.' },
    { nombre: 'Mate Imperial de Virola Cincelada', precio: 33000, imagen: '/img/Mate-Imperial3.png', categoria: 'Mates', subcategoria: 'Imperial', descripcion: 'Mate con virola cincelada que aporta un toque artesanal y elegante.' },
  ];

  const productosPorCategoria = {
    Mates: {
      Torpedo: [
        { nombre: 'Mate Torpedo Premium', precio: 32000, imagen: '/img/Mate-Torpedo2.png', categoria: 'Mates', subcategoria: 'Torpedo', descripcion: 'Torpedo con detalles premium en acero y cuero artesanal.' },
        { nombre: 'Mate Torpedo de Cuero y Acero', precio: 27000, imagen: '/img/Mate-Torpedo.png', categoria: 'Mates', subcategoria: 'Torpedo', descripcion: 'Mate estilo torpedo con detalles en cuero y acero.' },
      ],
      Imperial: [
        { nombre: 'Mate Imperial Calado', precio: 35000, imagen: '/img/Mate-Imperial4.png', categoria: 'Mates', subcategoria: 'Imperial', descripcion: 'Mate imperial calado con virola trabajada artesanalmente.' },
        { nombre: 'Mate de Imperial Virola Lisa', precio: 29000, imagen: '/img/Mate-Imperial1.png', categoria: 'Mates', subcategoria: 'Imperial', descripcion: 'Mate imperial con virola lisa, diseño fino y durable.' },
        { nombre: 'Mate Imperial de Virola Cincelada', precio: 33000, imagen: '/img/Mate-Imperial3.png', categoria: 'Mates', subcategoria: 'Imperial', descripcion: 'Mate con virola cincelada artesanal.' },
        { nombre: 'Mate Imperial de Algarrobo', precio: 18000, imagen: '/img/Mate-Imperial2.png', categoria: 'Mates', subcategoria: 'Imperial', descripcion: 'Mate de algarrobo robusto y con buen acabado.' },
      ],
      Tallado: [
        { nombre: 'Mate de Madera Tallado', precio: 22000, imagen: '/img/Mate-Tallado.png', categoria: 'Mates', subcategoria: 'Tallado', descripcion: 'Mate tallado a mano con diseño único.' },
      ],
      Camionero: [
        { nombre: 'Mate Camionero de Cuero y Acero', precio: 27000, imagen: '/img/Mate-Camionero.png', categoria: 'Mates', subcategoria: 'Camionero', descripcion: 'Mate camionero de cuero y acero.' },
        { nombre: 'Mate Camionero de Algarrobo', precio: 12000, imagen: '/img/Mate-Camionero1.png', categoria: 'Mates', subcategoria: 'Camionero', descripcion: 'Mate camionero de madera de algarrobo.' },
      ],
    },
    Termos: {
      Stanley: [
        { nombre: 'Termo Stanley 1L', precio: 150000, imagen: '/public/img/Termo-StanleyOr.png', categoria: 'Termos', subcategoria: 'Stanley', descripcion: 'Termo Stanley original, ultra resistente y térmico.' },
        { nombre: 'Termo Stanley 1,5LTS', precio: 52800, imagen: '/public/img/Termo-1,5.png', categoria: 'Termos', subcategoria: 'Stanley', descripcion: 'Termo Stanley original, ultra resistente y térmico.' },
      ],
      System: [
        { nombre: 'Termo System 1L con manija', precio: 48000, imagen: '/public/img/Termo-System.png', categoria: 'Termos', subcategoria: 'System', descripcion: 'Termo System con manija.' },
        { nombre: 'Termo System 1L sin manija', precio: 48000, imagen: '/public/img/Termo-System1.png', categoria: 'Termos', subcategoria: 'System', descripcion: 'Termo System sin manija.' },
      ],
      Bala: [
        { nombre: 'Termo Bala Plateado 1L', precio: 20400, imagen: '/public/img/Termo-Bala.png', categoria: 'Termos', subcategoria: 'Bala', descripcion: 'Termo tipo bala plateado.' },
        { nombre: 'Termo Bala Rosa 1L', precio: 24000, imagen: '/public/img/Termo-Bala1.png', categoria: 'Termos', subcategoria: 'Bala', descripcion: 'Termo tipo bala rosa.' },
      ],
      Otros: [
        { nombre: 'Termo Romania 1L', precio: 36000, imagen: '/public/img/Termo-Romania.png', categoria: 'Termos', subcategoria: 'Otros', descripcion: 'Termo Romania resistente y elegante.' },
        { nombre: 'Termo con Media Manija 1L', precio: 30000, imagen: '/public/img/Termo-MediaManija.png', categoria: 'Termos', subcategoria: 'Otros', descripcion: 'Termo con media manija.' },
        { nombre: 'Termo con Manija 1L', precio: 57600, imagen: '/public/img/Termo-Manija.png', categoria: 'Termos', subcategoria: 'Otros', descripcion: 'Termo con manija grande.' },
      ],
    },
    Yerba: {
      Canarias: [
        { nombre: 'Yerba Canarias', precio: 7500, imagen: '/public/img/Yerba-Canarias.png', categoria: 'Yerba', subcategoria: 'Canarias', descripcion: 'Yerba clásica de Canarias.' },
        { nombre: 'Yerba Canarias Serena', precio: 8500, imagen: '/public/img/Yerba-CanariasSerena.png', categoria: 'Yerba', subcategoria: 'Canarias', descripcion: 'Yerba con hierbas serranas.' },
        { nombre: 'Yerba Canarias de Té verde y Jengibre', precio: 8500, imagen: '/public/img/Yerba-CanariasTeVerde.png', categoria: 'Yerba', subcategoria: 'Canarias', descripcion: 'Yerba con hierbas serranas.' },
        { nombre: 'Yerba Canarias Edicion Especial ', precio: 8500, imagen: '/public/img/Yerba-CanariasE.png', categoria: 'Yerba', subcategoria: 'Canarias', descripcion: 'Yerba con hierbas serranas.' },
      ],
      Baldo: [
        { nombre: 'Yerba Baldo', precio: 7900, imagen: '/public/img/Yerba-Baldo.png', categoria: 'Yerba', subcategoria: 'Baldo', descripcion: 'Yerba Baldo de sabor intenso.' },
      ],
      Kurupi: [
        { nombre: 'Yerba con Menta y Boldo', precio: 1600, imagen: '/public/img/Yerba-KurupiBoldo.png', categoria: 'Yerba', subcategoria: 'Kurupi', descripcion: 'Yerba mezclada con hierbas serranas.' },
        { nombre: 'Yerba con Menta y Limon', precio: 1600, imagen: '/public/img/Yerba-KurupiML.png', categoria: 'Yerba', subcategoria: 'Kurupi', descripcion: 'Yerba mezclada con hierbas serranas.' },
        { nombre: 'Yerba con Mega Menta', precio: 1600, imagen: '/public/img/Yerba-KuruPiMenta.png', categoria: 'Yerba', subcategoria: 'Kurupi', descripcion: 'Yerba mezclada con hierbas serranas.' },
      ],
      MateRojo: [
        { nombre: 'Yerba Mate Rojo Tradicional', precio: 1600, imagen: '/public/img/Yerba-MateRojoA.png', categoria: 'Yerba', subcategoria: 'MateRojo', descripcion: 'Yerba mezclada con hierbas serranas.' },
        { nombre: 'Yerba Mate Rojo Especial', precio: 1600, imagen: '/public/img/Yerba-MateRojoE.png', categoria: 'Yerba', subcategoria: 'MateRojo', descripcion: 'Yerba mezclada con hierbas serranas.' },
        { nombre: 'Yerba Mate Rojo con Hierbas', precio: 1600, imagen: '/public/img/Yerba-MateRojoH.png', categoria: 'Yerba', subcategoria: 'MateRojo', descripcion: 'Yerba mezclada con hierbas serranas.' },
        { nombre: 'Yerba Mate Rojo Tereré', precio: 1600, imagen: '/public/img/Yerba-MateRojoTe.png', categoria: 'Yerba', subcategoria: 'MateRojo', descripcion: 'Yerba mezclada con hierbas serranas.' },
        { nombre: 'Yerba Mate Rojo Bajo Contenido en Polvo', precio: 1600, imagen: '/public/img/Yerba-MateRojoVe.png', categoria: 'Yerba', subcategoria: 'MateRojo', descripcion: 'Yerba mezclada con hierbas serranas.' },
        { nombre: 'Yerba Mate Rojo 250gr Argentina', precio: 1600, imagen: '/public/img/Yerba-MateRojoAr.png', categoria: 'Yerba', subcategoria: 'MateRojo', descripcion: 'Yerba mezclada con hierbas serranas.' },
        { nombre: 'Yerba Mate Rojo 250gr Messi', precio: 1600, imagen: '/public/img/Yerba-MateRojo10.png', categoria: 'Yerba', subcategoria: 'MateRojo', descripcion: 'Yerba mezclada con hierbas serranas.' },
      ],
      Pampa: [
        { nombre: 'Yerba Pampa Tradicional', precio: 1600, imagen: '/public/img/Yerba-PampaAm.png', categoria: 'Yerba', subcategoria: 'Pampa', descripcion: 'Yerba mezclada con hierbas serranas.' },
        { nombre: 'Yerba Pampa Intensa', precio: 1600, imagen: '/public/img/Yerba-PampaIn.png', categoria: 'Yerba', subcategoria: 'Pampa', descripcion: 'Yerba mezclada con hierbas serranas.' },
        { nombre: 'Yerba Pampa Bajo Contenido en Polvo', precio: 1600, imagen: '/public/img/Yerba-PampaBa.png', categoria: 'Yerba', subcategoria: 'Pampa', descripcion: 'Yerba mezclada con hierbas serranas.' },
      ],
      ReyVerde: [
        { nombre: 'Rey Verde', precio: 7900, imagen: '/public/img/Yerba-ReyVerde.png', categoria: 'Yerba', subcategoria: 'ReyVerde', descripcion: 'Yerba Baldo de sabor intenso.' },
      ],
      Aguantadora: [
        { nombre: 'Aguantadora Tradicional', precio: 7900, imagen: '/public/img/Yerba-AguantadoraT.png', categoria: 'Yerba', subcategoria: 'Aguantadora', descripcion: 'Yerba Baldo de sabor intenso.' },
        { nombre: 'Aguantadora Tradicional de 250gr', precio: 7900, imagen: '/public/img/Yerba-Aguantadora250.png', categoria: 'Yerba', subcategoria: 'Aguantadora', descripcion: 'Yerba Baldo de sabor intenso.' },
        { nombre: 'Aguantadora Despalada', precio: 7900, imagen: '/public/img/Yerba-AguantadoraDe.png', categoria: 'Yerba', subcategoria: 'Aguantadora', descripcion: 'Yerba Baldo de sabor intenso.' },
        { nombre: 'Aguantadora Suave', precio: 7900, imagen: '/public/img/Yerba-AguantadoraS.png', categoria: 'Yerba', subcategoria: 'Aguantadora', descripcion: 'Yerba Baldo de sabor intenso.' },
      ],
      Otras: [
        { nombre: 'Los Talas', precio: 7900, imagen: '/public/img/Yerba-LosTalas.png', categoria: 'Yerba', subcategoria: 'ReyVerde', descripcion: 'Yerba Baldo de sabor intenso.' },
        { nombre: 'Obereña', precio: 7900, imagen: '/public/img/Yerba-Obereña.png', categoria: 'Yerba', subcategoria: 'ReyVerde', descripcion: 'Yerba Baldo de sabor intenso.' },
        { nombre: 'Pindaré', precio: 7900, imagen: '/public/img/Yerba-Pindare.png', categoria: 'Yerba', subcategoria: 'ReyVerde', descripcion: 'Yerba Baldo de sabor intenso.' },
        { nombre: 'Relumbron', precio: 7900, imagen: '/public/img/Yerba-Relumbron.png', categoria: 'Yerba', subcategoria: 'ReyVerde', descripcion: 'Yerba Baldo de sabor intenso.' },
        { nombre: 'Rey Verde', precio: 7900, imagen: '/public/img/Yerba-ReyVerde.png', categoria: 'Yerba', subcategoria: 'ReyVerde', descripcion: 'Yerba Baldo de sabor intenso.' },
        { nombre: 'Tucanguá', precio: 7900, imagen: '/public/img/Yerba-Tucangua.png', categoria: 'Yerba', subcategoria: 'ReyVerde', descripcion: 'Yerba Baldo de sabor intenso.' },
        { nombre: 'Un Mate', precio: 7900, imagen: '/public/img/Yerba-UnMate.png', categoria: 'Yerba', subcategoria: 'ReyVerde', descripcion: 'Yerba Baldo de sabor intenso.' },
        { nombre: 'Cósmico', precio: 7900, imagen: '/public/img/Yerba-Cosmico.png', categoria: 'Yerba', subcategoria: 'ReyVerde', descripcion: 'Yerba Baldo de sabor intenso.' },
        { nombre: 'Kalena', precio: 7900, imagen: '/public/img/Yerba-Kalena.png', categoria: 'Yerba', subcategoria: 'ReyVerde', descripcion: 'Yerba Baldo de sabor intenso.' },
      ],

    },

    Bombillas: {
      Acero: [
        { nombre: 'Bombilla Pico de Loro', precio: 6000, imagen: '/public/img/Bombilla-pico-de-loro-bronce-niquelado-18cm.-copia-1-600x600.png', categoria: 'Bombillas', subcategoria: 'Acero', descripcion: 'Bombilla curva estilo pico de loro, de acero reforzado.' },
      ],  
    },
  };

  const filtrarCategoria = (categoria) => {
    if (categoria === 'Todos') {
      setCategoriaSeleccionada(null);
      setSubcategoriaSeleccionada(null);
    } else {
      setCategoriaSeleccionada(categoria);
      setSubcategoriaSeleccionada(null);
    }
    setMostrarMenu(false);
  };

  let productosFiltrados = [];

  if (!categoriaSeleccionada) {
    productosFiltrados = productosDefault;
  } else if (typeof productosPorCategoria[categoriaSeleccionada] === 'object' && !Array.isArray(productosPorCategoria[categoriaSeleccionada])) {
    if (subcategoriaSeleccionada && productosPorCategoria[categoriaSeleccionada][subcategoriaSeleccionada]) {
      productosFiltrados = productosPorCategoria[categoriaSeleccionada][subcategoriaSeleccionada];
    } else {
      productosFiltrados = Object.values(productosPorCategoria[categoriaSeleccionada]).flat();
    }
  } else {
    productosFiltrados = productosPorCategoria[categoriaSeleccionada] || [];
  }

  productosFiltrados = productosFiltrados.filter((prod) =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarAlCarrito = (producto) => {
    const index = carrito.findIndex((p) => p.nombre === producto.nombre);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito[index].cantidad += 1;
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  const aumentarCantidad = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad += 1;
    setCarrito(nuevoCarrito);
  };

  const disminuirCantidad = (index) => {
    const nuevoCarrito = [...carrito];
    if (nuevoCarrito[index].cantidad > 1) {
      nuevoCarrito[index].cantidad -= 1;
    } else {
      nuevoCarrito.splice(index, 1);
    }
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const mostrarSubcategorias = () => {
    const subcats = productosPorCategoria[categoriaSeleccionada];
    if (typeof subcats === 'object' && !Array.isArray(subcats)) {
      return (
        <div className="subcategorias">
          <button onClick={() => setSubcategoriaSeleccionada(null)}>Todos</button>
          {Object.keys(subcats).map((subcat) => (
            <button
              key={subcat}
              className={subcategoriaSeleccionada === subcat ? 'activo' : ''}
              onClick={() => setSubcategoriaSeleccionada(subcat)}
            >
              {subcat}
            </button>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="pagina">
      <Header
      
        carritoCount={carrito.reduce((acc, item) => acc + item.cantidad, 0)}
        onAbrirCarrito={() => setMostrarCarrito(true)}
        onAbrirMenu={() => setMostrarMenu(true)}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
       {/* Hero debajo del Header */}
      <section className="hero">
  <div className="hero-contenido">
    <img src="/public/img/logo (2).png" alt="Logo Tienda" className="hero-logo" />
    <div className="hero-texto">
      <h1>Bienvenido a SAMATE, mates y sabores </h1>
      <p>Los mejores mates, termos, yerbas y bombillas  al mejor precio</p>
    </div>
  </div>
</section>


      {mostrarCarrito && (
        <ModalCarrito
          carrito={carrito}
          eliminarDelCarrito={eliminarDelCarrito}
          vaciarCarrito={vaciarCarrito}
          aumentarCantidad={aumentarCantidad}
          disminuirCantidad={disminuirCantidad}
          cerrar={() => setMostrarCarrito(false)}
        />
      )}

      {mostrarMenu && (
        <ModalMenu
          cerrar={() => setMostrarMenu(false)}
          filtrar={filtrarCategoria}
        />
      )}

      {categoriaSeleccionada ? (
        <>
          {cargando ? (
            <div className="cargando-spinner">
              <div className="spinner"></div>
              <p className="texto-cargando">Cargando {categoriaSeleccionada}...</p>
            </div>
          ) : (
            <>
              {mostrarSubcategorias()}
              <button className="btn-volver" onClick={() => setCategoriaSeleccionada(null)}>← Volver</button>
              <div className="productos">
                {productosFiltrados.map((prod, index) => (
                  <Producto
                    key={index}
                    producto={prod}
                    agregarAlCarrito={agregarAlCarrito}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <h2 class="titulo-coleccion">Colección Exclusiva</h2>
          <p class="subtitulo-coleccion">Elegancia, detalle y distinción en cada uno de nuestros productos seleccionados.</p>
          <div className="productos">
            {productosFiltrados.map((prod, index) => (
              <Producto
                key={index}
                producto={prod}
                agregarAlCarrito={agregarAlCarrito}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PaginaInicio;
