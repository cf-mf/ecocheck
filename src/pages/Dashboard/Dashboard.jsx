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
      borderColor: '#1382A8',
      backgroundColor: 'rgba(19,130,168,0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Energia (kWh)',
      data: [30, 28, 35, 25, 32, 38, 33],
      borderColor: '#6FA61B',
      backgroundColor: 'rgba(111,166,27,0.1)',
      tension: 0.4,
      fill: true,
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Consumo de Água e Energia - Últimos 7 Dias',
      font: { size: 18 },
      color: '#0b3d59'
    },
    legend: {
      position: 'top',
      labels: {
        color: '#0b3d59',
        font: { size: 14 }
      }
    },
    tooltip: {
      backgroundColor: '#0b3d59',
      titleColor: '#ffffff',
      bodyColor: '#ffffff',
      cornerRadius: 6
    }
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  },
  scales: {
    y: { beginAtZero: true }
  }
};

export function Dashboard() {
  return (
    <section className="dashboard-page">
      
      <div className="dashboard-cards">
        <div className="card">
          <h3>Água total</h3>
          <p>815 L</p>
        </div>
        <div className="card">
          <h3>Energia total</h3>
          <p>221 kWh</p>
        </div>
        <div className="card">
          <h3>Economia estimada</h3>
          <p>R$ 120</p>
        </div>
      </div>

      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </section>
  );
}

export default Dashboard;
