import React, { useState } from 'react';
import Alert from '../common/Alert';
import folderIcon from '../../image/folder.png';
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

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ message: '', type: '' });

  // Función para validar RUT chileno
  const validarRUT = (rut) => {
    // Limpiar el RUT
    rut = rut.replace(/\s/g, '').toUpperCase();
    
    // Validar formato básico
    if (!/^(\d{7,8})-([\dK])$/.test(rut)) {
      return false;
    }
    
    // Separar el cuerpo del dígito verificador
    const [cuerpo, dv] = rut.split('-');
    
    // Calcular el dígito verificador esperado
    let suma = 0;
    let multiplo = 2;
    
    // Recorrer el cuerpo de derecha a izquierda
    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo.charAt(i)) * multiplo;
      multiplo = multiplo === 7 ? 2 : multiplo + 1;
    }
    
    // Calcular dígito verificador esperado
    const dvEsperado = 11 - (suma % 11);
    const dvCalculado = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();
    
    // Validar que el DV coincida
    return dv === dvCalculado;
  };

  // Función para formatear RUT (solo al enviar)
  const formatearRUT = (rut) => {
    rut = rut.replace(/\s/g, '').toUpperCase();
    const regex = /^(\d{1,2})(\d{3})(\d{3})-([\dK])$/;
    const match = rut.match(regex);
    
    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    }
    
    return rut;
  };

  // Función para validar email
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Función para validar teléfono chileno
  const validarTelefono = (telefono) => {
    // Acepta formatos: +56 9 1234 5678, 56912345678, 9 1234 5678
    const regex = /^(\+56\s?)?[9]\s?\d{4}\s?\d{4}$/;
    return regex.test(telefono.replace(/\s/g, ''));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }

    // Solo convertir patente a mayúsculas automáticamente
    if (id === 'patente') {
      setFormData(prevState => ({
        ...prevState,
        [id]: value.toUpperCase()
      }));
      return;
    }

    // Para RUT, permitir solo números, K, k y guión, pero sin auto-formateo
    if (id === 'rut') {
      // Permitir solo números, K, k y guión
      const rutValue = value.replace(/[^0-9kK\-]/g, '');
      setFormData(prevState => ({
        ...prevState,
        [id]: rutValue
      }));
      return;
    }

    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    let error = '';

    // Validaciones al perder el foco
    if (id === 'rut' && value) {
      if (!validarRUT(value)) {
        error = 'RUT inválido. Formato esperado: 12345678-9';
      }
    }

    if (id === 'email' && value) {
      if (!validarEmail(value)) {
        error = 'El email ingresado no es válido';
      }
    }

    if (id === 'telefono' && value) {
      if (!validarTelefono(value)) {
        error = 'El teléfono debe tener formato chileno (+56 9 1234 5678)';
      }
    }

    if (error) {
      setErrors(prev => ({
        ...prev,
        [id]: error
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones completas antes de enviar
    const newErrors = {};

    // Validar RUT
    if (!formData.rut) {
      newErrors.rut = 'El RUT es obligatorio';
    } else if (!validarRUT(formData.rut)) {
      newErrors.rut = 'RUT inválido. Formato esperado: 12345678-9';
    }

    // Validar campos obligatorios
    if (!formData.nombreCliente) {
      newErrors.nombreCliente = 'El nombre del cliente es obligatorio';
    }

    if (!formData.poliza) {
      newErrors.poliza = 'El número de póliza es obligatorio';
    }

    if (!formData.patente) {
      newErrors.patente = 'La patente del vehículo es obligatoria';
    }

    if (!formData.marca) {
      newErrors.marca = 'La marca del vehículo es obligatoria';
    }

    if (!formData.modelo) {
      newErrors.modelo = 'El modelo del vehículo es obligatorio';
    }

    if (!formData.tipoDanio) {
      newErrors.tipoDanio = 'Debe seleccionar el tipo de daño';
    }

    if (!formData.tipoVehiculo) {
      newErrors.tipoVehiculo = 'Debe seleccionar el tipo de vehículo';
    }

    // Validar email
    if (!formData.email) {
      newErrors.email = 'El email es obligatorio';
    } else if (!validarEmail(formData.email)) {
      newErrors.email = 'El email ingresado no es válido';
    }

    // Validar teléfono
    if (!formData.telefono) {
      newErrors.telefono = 'El teléfono es obligatorio';
    } else if (!validarTelefono(formData.telefono)) {
      newErrors.telefono = 'El teléfono debe tener formato chileno (+56 9 1234 5678)';
    }

    // Si hay errores, mostrarlos y detener el envío
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setAlert({ 
        message: 'Por favor, corrige los errores en el formulario', 
        type: 'error' 
      });
      return;
    }

    // Si todo está válido, proceder con el envío
    try {
      // Simular creación de siniestro
      const nuevoSiniestro = {
        id: Math.floor(Math.random() * 1000) + 1,
        ...formData,
        rut: formatearRUT(formData.rut), // Formatear solo al guardar
        fechaRegistro: new Date().toISOString(),
        estado: 'Ingresado',
        liquidador: 'María González', // Simulado
        grua: 'Grúa Express Norte', // Simulado
        taller: 'Taller Mecánico ABC' // Simulado
      };

      setAlert({ 
        message: `Siniestro creado exitosamente con ID: ${nuevoSiniestro.id}. Liquidador asignado: ${nuevoSiniestro.liquidador}`, 
        type: 'success' 
      });
      
      // Limpiar formulario
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
      
      setErrors({});
      
    } catch (error) {
      setAlert({ 
        message: 'Error al crear el siniestro. Intente nuevamente.', 
        type: 'error' 
      });
      console.error('Error:', error);
    }
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
    setErrors({});
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

      <form id="siniestroForm" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="rut">RUT del Asegurado *</label>
            <input
              type="text"
              id="rut"
              value={formData.rut}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="12345678-9"
              className={errors.rut ? 'error' : ''}
              required
            />
            <small className="hint">Formato: 12345678-9 (debe incluir el guión)</small>
            {errors.rut && <span className="error-text">{errors.rut}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="nombreCliente">Nombre del Cliente *</label>
            <input
              type="text"
              id="nombreCliente"
              value={formData.nombreCliente}
              onChange={handleChange}
              placeholder="Juan Pérez"
              className={errors.nombreCliente ? 'error' : ''}
              required
            />
            {errors.nombreCliente && <span className="error-text">{errors.nombreCliente}</span>}
          </div>
        </div>

        {/* El resto del formulario permanece igual */}
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
                className={errors.poliza ? 'error' : ''}
                required
              />
              <img src={folderIcon} alt="Póliza" className="input-icon" />
            </div>
            {errors.poliza && <span className="error-text">{errors.poliza}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="patente">Patente del Vehículo *</label>
            <input
              type="text"
              id="patente"
              value={formData.patente}
              onChange={handleChange}
              placeholder="ABCD12"
              className={errors.patente ? 'error' : ''}
              required
            />
            {errors.patente && <span className="error-text">{errors.patente}</span>}
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
              className={errors.marca ? 'error' : ''}
              required
            />
            {errors.marca && <span className="error-text">{errors.marca}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="modelo">Modelo *</label>
            <input
              type="text"
              id="modelo"
              value={formData.modelo}
              onChange={handleChange}
              placeholder="Corolla"
              className={errors.modelo ? 'error' : ''}
              required
            />
            {errors.modelo && <span className="error-text">{errors.modelo}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tipoDanio">Tipo de Daño *</label>
            <select
              id="tipoDanio"
              value={formData.tipoDanio}
              onChange={handleChange}
              className={errors.tipoDanio ? 'error' : ''}
              required
            >
              <option value="">Selecciona...</option>
              <option value="Colisión">Colisión</option>
              <option value="Robo">Robo</option>
              <option value="Incendio">Incendio</option>
              <option value="Vandalismo">Vandalismo</option>
            </select>
            {errors.tipoDanio && <span className="error-text">{errors.tipoDanio}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="tipoVehiculo">Tipo de Vehículo *</label>
            <select
              id="tipoVehiculo"
              value={formData.tipoVehiculo}
              onChange={handleChange}
              className={errors.tipoVehiculo ? 'error' : ''}
              required
            >
              <option value="">Selecciona...</option>
              <option value="Sedán">Sedán</option>
              <option value="SUV">SUV</option>
              <option value="Camioneta">Camioneta</option>
              <option value="Moto">Moto</option>
            </select>
            {errors.tipoVehiculo && <span className="error-text">{errors.tipoVehiculo}</span>}
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
              onBlur={handleBlur}
              placeholder="correo@dominio.cl"
              className={errors.email ? 'error' : ''}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="telefono">Teléfono *</label>
            <input
              type="tel"
              id="telefono"
              value={formData.telefono}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+56 9 1234 5678"
              className={errors.telefono ? 'error' : ''}
              required
            />
            {errors.telefono && <span className="error-text">{errors.telefono}</span>}
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