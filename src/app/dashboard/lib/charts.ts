import { ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        borderColor: '#555',
        display: false,
        color: '#555',
      },
      ticks: {
        color: '#AAA',
        autoSkip: true,
        autoSkipPadding: 4,
      },
    },
    y: {
      grid: {
        borderColor: 'transparent',
        color: '#555',
      },
      ticks: {
        color: '#AAA',
      },
    },
  },
  color: '#AAA',
};
