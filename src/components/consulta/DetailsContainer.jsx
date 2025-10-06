import React from 'react';
import folderIcon from '../../image/folder.png';
import listIcon from '../../image/list.png';
import yellowCheckmarkIcon from '../../image/YellowCheckMark.png';
import checkmarkIcon from '../../image/Checkmark.png';

const DetailsContainer = ({ siniestro }) => {
  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="details-container">
      <h3>Información del Siniestro</h3>
      <div className="details-grid">
        <div className="detail-group">
          <h4>Datos del Asegurado</h4>
          <div className="detail-item">
            <img src={folderIcon} alt="Usuario" className="detail-icon" />
            <span className="detail-label">RUT:</span>
            <span className="detail-value">{siniestro.rut}</span>
          </div>
          <div className="detail-item">
            <img src={folderIcon} alt="Póliza" className="detail-icon" />
            <span className="detail-label">Póliza:</span>
            <span className="detail-value">{siniestro.numeroPoliza}</span>
          </div>
          <div className="detail-item">
            <img src={listIcon} alt="Email" className="detail-icon" />
            <span className="detail-label">Email:</span>
            <span className="detail-value">{siniestro.email}</span>
          </div>
          <div className="detail-item">
            <img src={listIcon} alt="Teléfono" className="detail-icon" />
            <span className="detail-label">Teléfono:</span>
            <span className="detail-value">{siniestro.telefono}</span>
          </div>
        </div>
        
        <div className="detail-group">
          <h4>Detalles del Siniestro</h4>
          <div className="detail-item">
            <img src={yellowCheckmarkIcon} alt="Daño" className="detail-icon" />
            <span className="detail-label">Tipo de Daño:</span>
            <span className="detail-value">{siniestro.tipoSeguro}</span>
          </div>
          <div className="detail-item">
            <img src={folderIcon} alt="Vehículo" className="detail-icon" />
            <span className="detail-label">Vehículo:</span>
            <span className="detail-value">
              {siniestro.marca} {siniestro.modelo} ({siniestro.patente})
            </span>
          </div>
          <div className="detail-item">
            <img src={listIcon} alt="Grúa" className="detail-icon" />
            <span className="detail-label">Grúa:</span>
            <span className="detail-value">{siniestro.grua}</span>
          </div>
          <div className="detail-item">
            <img src={yellowCheckmarkIcon} alt="Taller" className="detail-icon" />
            <span className="detail-label">Taller:</span>
            <span className="detail-value">{siniestro.taller}</span>
          </div>
        </div>
        
        <div className="detail-group">
          <h4>Asignaciones</h4>
          <div className="detail-item">
            <img src={folderIcon} alt="Liquidador" className="detail-icon" />
            <span className="detail-label">Liquidador:</span>
            <span className="detail-value">{siniestro.liquidador}</span>
          </div>
          <div className="detail-item">
            <img src={listIcon} alt="Fecha" className="detail-icon" />
            <span className="detail-label">Fecha Registro:</span>
            <span className="detail-value">{formatearFecha(siniestro.fechaRegistro)}</span>
          </div>
          <div className="detail-item">
            <img src={checkmarkIcon} alt="Estado" className="detail-icon" />
            <span className="detail-label">Estado Actual:</span>
            <span className="detail-value">{siniestro.estado}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;