// pages/Dashboard/Dashboard.jsx

import './Dashboard.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const labels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

const data = {
  labels,
  datasets: [
    {
      label: 'Água (litros)',
      data: [120, 100, 130, 90, 110, 140, 115],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
      tension: 0.3,
      fill: true,
    },
    {
      label: 'Energia (kWh)',
      data: [30, 28, 35, 25, 32, 38, 33],
      borderColor: 'green',
      backgroundColor: 'rgba(0, 128, 0, 0.1)',
      tension: 0.3,
      fill: true,
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // <--- ESSENCIAL pra responsividade
  plugins: {
    title: {
      display: true,
      text: 'Consumo de Água e Energia - Últimos 7 Dias',
      font: {
        size: 18
      }
    },
    legend: {
      position: 'top'
    },
    tooltip: {
      mode: 'index',
      intersect: false
    }
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

export function Dashboard() {
  return (
    <section className="page" style={{ padding: '2rem 1rem' }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '1rem',
        borderRadius: '10px',
        background: 'white',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        height: '400px', // altura controlada, adaptável ao conteúdo
      }}>
        <Line data={data} options={options} />
      </div>
    </section>
  );
}

export default Dashboard;
