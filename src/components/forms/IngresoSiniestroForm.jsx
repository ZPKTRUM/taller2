import React, { useState } from 'react';
import Alert from '../common/Alert';
import folderIcon from '../../image/folder.png'; // ← Importaciones
import checkmarkIcon from '../../image/Checkmark.png';
import listIcon from '../../image/list.png';

const IngresoSiniestroForm = () => {
  const [formData, setFormData] = useState({
    rut: '',
    nombreCliente: '',
    poliza: '',
    patente: '',
    marca: '',
    modelo: '',
    tipoDanio: '',
    tipoVehiculo: '',
    email: '',
    telefono: ''
  });

  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert({ 
      message: 'Siniestro registrado exitosamente con ID: 123. Liquidador asignado: María González', 
      type: 'success' 
    });
    
    setFormData({
      rut: '',
      nombreCliente: '',
      poliza: '',
      patente: '',
      marca: '',
      modelo: '',
      tipoDanio: '',
      tipoVehiculo: '',
      email: '',
      telefono: ''
    });
  };

  const handleReset = () => {
    setFormData({
      rut: '',
      nombreCliente: '',
      poliza: '',
      patente: '',
      marca: '',
      modelo: '',
      tipoDanio: '',
      tipoVehiculo: '',
      email: '',
      telefono: ''
    });
    setAlert({ message: '', type: '' });
  };

  const handleFileUpload = () => {
    setAlert({ 
      message: 'Archivo seleccionado: documento_reciente.pdf', 
      type: 'info' 
    });
  };

  return (
    <div className="form-container">
      <h1>Ingreso de Siniestro</h1>
      <p>Completa todos los campos obligatorios para registrar un nuevo siniestro.</p>

      <Alert message={alert.message} type={alert.type} />

      <form id="siniestroForm" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="rut">RUT del Asegurado *</label>
            <input
              type="text"
              id="rut"
              value={formData.rut}
              onChange={handleChange}
              placeholder="12345678-9"
              required
            />
            <small className="hint">Formato: 12345678-9</small>
          </div>
          
          <div className="form-group">
            <label htmlFor="nombreCliente">Nombre del Cliente *</label>
            <input
              type="text"
              id="nombreCliente"
              value={formData.nombreCliente}
              onChange={handleChange}
              placeholder="Juan Pérez"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="poliza">N° de Póliza *</label>
            <div className="input-with-icon">
              <input
                type="text"
                id="poliza"
                value={formData.poliza}
                onChange={handleChange}
                placeholder="POL123"
                required
              />
              <img src={folderIcon} alt="Póliza" className="input-icon" />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="patente">Patente del Vehículo *</label>
            <input
              type="text"
              id="patente"
              value={formData.patente}
              onChange={handleChange}
              placeholder="ABCD12"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="marca">Marca *</label>
            <input
              type="text"
              id="marca"
              value={formData.marca}
              onChange={handleChange}
              placeholder="Toyota"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="modelo">Modelo *</label>
            <input
              type="text"
              id="modelo"
              value={formData.modelo}
              onChange={handleChange}
              placeholder="Corolla"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tipoDanio">Tipo de Daño *</label>
            <select
              id="tipoDanio"
              value={formData.tipoDanio}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona...</option>
              <option value="Colisión">Colisión</option>
              <option value="Robo">Robo</option>
              <option value="Incendio">Incendio</option>
              <option value="Vandalismo">Vandalismo</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="tipoVehiculo">Tipo de Vehículo *</label>
            <select
              id="tipoVehiculo"
              value={formData.tipoVehiculo}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona...</option>
              <option value="Sedán">Sedán</option>
              <option value="SUV">SUV</option>
              <option value="Camioneta">Camioneta</option>
              <option value="Moto">Moto</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email de contacto *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="correo@dominio.cl"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="telefono">Teléfono *</label>
            <input
              type="tel"
              id="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+56 9 1234 5678"
              required
            />
          </div>
        </div>

        <div className="form-group file-upload">
          <label>Adjuntar Documento (opcional)</label>
          <div className="file-input-wrapper">
            <button 
              type="button" 
              className="file-button"
              onClick={handleFileUpload}
            >
              <img src={folderIcon} alt="Archivo" className="file-icon" />
              Elegir archivo
            </button>
            <span className="file-text">No se ha seleccionado ningún archivo</span>
          </div>
          <small className="file-hint">
            Se almacenan solo los nombres de archivo en esta demo
          </small>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            <img src={checkmarkIcon} alt="Validar" className="btn-icon" />
            Registrar Siniestro
          </button>
          <button type="button" onClick={handleReset} className="btn btn-secondary">
            <img src={listIcon} alt="Limpiar" className="btn-icon" />
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default IngresoSiniestroForm;
