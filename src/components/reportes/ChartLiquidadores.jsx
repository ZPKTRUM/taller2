import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartLiquidadores = () => {
  const data = {
    labels: ['María González', 'Carlos López', 'Ana Silva', 'Pedro Martínez', 'Luis Rodríguez'],
    datasets: [
      {
        label: 'Total por liquidador',
        data: [12, 8, 15, 10, 7],
        borderColor: '#2980b9',
        backgroundColor: 'rgba(41, 128, 185, 0.1)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Siniestros por Liquidador</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartLiquidadores;