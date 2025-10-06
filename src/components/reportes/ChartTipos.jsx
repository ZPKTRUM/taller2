import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartTipos = () => {
  const data = {
    labels: ['Colisión', 'Robo', 'Incendio', 'Vandalismo'],
    datasets: [
      {
        data: [35, 20, 15, 30],
        backgroundColor: ['#e74c3c', '#9b59b6', '#1abc9c', '#f39c12'],
        borderColor: ['#c0392b', '#8e44ad', '#16a085', '#e67e22'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Tipos de Daño</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ChartTipos;