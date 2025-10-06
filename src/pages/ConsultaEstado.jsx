import React, { useState } from 'react';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import ConsultaForm from '../components/consulta/ConsultaForm';
import ProgressBar from '../components/consulta/ProgressBar';
import DetailsContainer from '../components/consulta/DetailsContainer';
import Alert from '../components/common/Alert';

const ConsultaEstado = () => {
  const [showResults, setShowResults] = useState(false);
  const [siniestroData, setSiniestroData] = useState(null);
  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleConsulta = (rut, poliza) => {
    // Simular búsqueda de siniestro
    const siniestroEncontrado = buscarSiniestroSimulado(rut, poliza);
    
    if (siniestroEncontrado) {
      setSiniestroData(siniestroEncontrado);
      setShowResults(true);
      setAlert({ message: 'Información encontrada exitosamente', type: 'success' });
    } else {
      setShowResults(false);
      setAlert({ message: 'No se encontró información para el RUT y póliza ingresados', type: 'error' });
    }
  };

  const buscarSiniestroSimulado = (rut, poliza) => {
    // Datos simulados - en una app real esto vendría de una API
    const siniestrosSimulados = [
      {
        id: 1,
        rut: '12.345.678-9',
        nombreCliente: 'Juan Pérez González',
        numeroPoliza: 'POL12345',
        email: 'juan.perez@email.com',
        telefono: '+56 9 1234 5678',
        tipoSeguro: 'Colisión',
        marca: 'Toyota',
        modelo: 'Corolla',
        patente: 'ABCD12',
        estado: 'En Evaluación',
        liquidador: 'María González',
        grua: 'Grúa Express Norte',
        taller: 'Taller Mecánico ABC',
        fechaRegistro: '2024-01-15T10:30:00'
      },
      {
        id: 2,
        rut: '23.456.789-0',
        nombreCliente: 'Ana María Silva',
        numeroPoliza: 'POL12346',
        email: 'ana.silva@email.com',
        telefono: '+56 9 2345 6789',
        tipoSeguro: 'Robo',
        marca: 'Hyundai',
        modelo: 'Tucson',
        patente: 'EFGH34',
        estado: 'Ingresado',
        liquidador: 'Carlos López',
        grua: 'Grúa Rápida Sur',
        taller: 'Taller Automotriz Pro',
        fechaRegistro: '2024-01-16T14:20:00'
      },
      {
        id: 3,
        rut: '34.567.890-1',
        nombreCliente: 'Pedro Martínez Rojas',
        numeroPoliza: 'POL12347',
        email: 'pedro.martinez@email.com',
        telefono: '+56 9 3456 7890',
        tipoSeguro: 'Incendio',
        marca: 'Ford',
        modelo: 'Ranger',
        patente: 'IJKL56',
        estado: 'Finalizado',
        liquidador: 'Ana Silva',
        grua: 'Grúa Central 24/7',
        taller: 'Taller Central Motors',
        fechaRegistro: '2024-01-10T09:15:00'
      }
    ];

    // Simular búsqueda (case insensitive)
    return siniestrosSimulados.find(s => 
      s.rut.toLowerCase().includes(rut.toLowerCase()) && 
      s.numeroPoliza.toLowerCase().includes(poliza.toLowerCase())
    );
  };

  return (
    <div className="app">
      <Header userType="admin" />
      <Navigation activePage="consulta" />
      <main className="main-content">
        <div className="welcome-section">
          <h2>Consulta de Estado del Siniestro</h2>
          <p>Ingrese su RUT y número de póliza para consultar el estado de su siniestro.</p>
        </div>

        <Alert message={alert.message} type={alert.type} />

        <ConsultaForm onConsulta={handleConsulta} />

        {showResults && siniestroData && (
          <>
            <ProgressBar estado={siniestroData.estado} />
            <DetailsContainer siniestro={siniestroData} />
          </>
        )}
      </main>
    </div>
  );
};

export default ConsultaEstado;