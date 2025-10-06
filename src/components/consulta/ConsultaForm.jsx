import React, { useState } from 'react';
import listIcon from '../../image/list.png';

const ConsultaForm = ({ onConsulta }) => {
  const [formData, setFormData] = useState({
    rutConsulta: '',
    polizaConsulta: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.rutConsulta.trim() || !formData.polizaConsulta.trim()) {
      return;
    }

    onConsulta(formData.rutConsulta, formData.polizaConsulta);
  };

  return (
    <div className="form-container">
      <form id="consultaForm" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="rutConsulta">RUT del Asegurado</label>
            <input
              type="text"
              id="rutConsulta"
              value={formData.rutConsulta}
              onChange={handleChange}
              placeholder="12.345.678-9"
              required
            />
            <p className="info-text">Formato: 12.345.678-9</p>
          </div>
          <div className="form-group">
            <label htmlFor="polizaConsulta">Número de Póliza</label>
            <input
              type="text"
              id="polizaConsulta"
              value={formData.polizaConsulta}
              onChange={handleChange}
              placeholder="POL123"
              required
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            <img src={listIcon} alt="Consultar" className="btn-icon" />
            Consultar Estado
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConsultaForm;