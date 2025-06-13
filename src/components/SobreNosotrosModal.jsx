import React from 'react';
import '../assets/css/SobreNosotrosModal.css';

const SobreNosotrosModal = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Sobre Nosotros</h2>
        <p><strong>Bautista Verdugo</strong>: Estudiante y desarrollador de esta tienda virtual, apasionado por el diseño web y la tecnología.</p>
        <p><strong>Compañero X</strong>: Co-creador del proyecto, enfocado en la organización y la presentación visual de los productos.</p>
        <button className="cerrar-modal" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default SobreNosotrosModal;
