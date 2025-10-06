import React from 'react';

const ListaRecientes = () => {
  // Datos simulados de siniestros recientes
  const siniestrosRecientes = [
    {
      id: 1,
      fecha: '2025-01-15T10:30:00',
      rut: '12.345.678-9',
      poliza: 'POL12345',
      tipoSeguro: 'Colisión',
      estado: 'En Evaluación'
    },
    {
      id: 2,
      fecha: '2025-01-14T15:20:00',
      rut: '23.456.789-0',
      poliza: 'POL12346',
      tipoSeguro: 'Robo',
      estado: 'Ingresado'
    },
    {
      id: 3,
      fecha: '2025-01-14T09:15:00',
      rut: '34.567.890-1',
      poliza: 'POL12347',
      tipoSeguro: 'Incendio',
      estado: 'Finalizado'
    },
    {
      id: 4,
      fecha: '2025-01-13T16:45:00',
      rut: '45.678.901-2',
      poliza: 'POL12348',
      tipoSeguro: 'Vandalismo',
      estado: 'En Evaluación'
    },
    {
      id: 5,
      fecha: '2025-01-13T11:20:00',
      rut: '56.789.012-3',
      poliza: 'POL12349',
      tipoSeguro: 'Colisión',
      estado: 'Finalizado'
    }
  ];

  const formatearFechaHora = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleString('es-CL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="chart-container">
      <h3>Siniestros Recientes (Últimos 5)</h3>
      <ul className="lista-recientes">
        {siniestrosRecientes.map(siniestro => (
          <li key={siniestro.id} className="item-reciente">
            <div className="fecha">{formatearFechaHora(siniestro.fecha)}</div>
            <div className="detalles">
              <span className="rut">RUT: {siniestro.rut}</span>
              <span className="poliza">Póliza: {siniestro.poliza}</span>
              <span className="tipo">Daño: {siniestro.tipoSeguro}</span>
              <span className={`estado estado-${siniestro.estado.toLowerCase().replace(' ', '-')}`}>
                Estado: {siniestro.estado}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaRecientes;