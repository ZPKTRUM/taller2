import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartEstados = () => {
  // Datos simulados
  const data = {
    labels: ['Ingresados', 'En Evaluación', 'Finalizados', 'Activos'],
    datasets: [
      {
        label: 'Cantidad',
        data: [15, 8, 45, 23],
        backgroundColor: ['#3498db', '#f1c40f', '#2ecc71', '#e67e22'],
        borderColor: ['#2980b9', '#d35400', '#27ae60', '#c0392b'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Estados de los Siniestros',
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Estados de los Siniestros</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartEstados;