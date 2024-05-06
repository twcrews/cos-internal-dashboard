import { ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions = {
  responsive: true,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        borderColor: 'rgba(255, 255, 255, 0.1)',
        display: false,
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)',
        autoSkip: true,
        autoSkipPadding: 4,
      },
    },
    y: {
      grid: {
        borderColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)',
      },
    },
  },
  color: 'rgba(255, 255, 255, 0.6)',
};

export const currencyChartOptions: ChartOptions = { ...chartOptions, scales: {...chartOptions.scales, y: { ...chartOptions.scales?.['y'], ticks: {...chartOptions.scales?.['y']?.ticks, 
callback: function(value, index, values) {
  if(parseInt(`${value}`) >= 1000){
    return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return '$' + value;
  }
}}}}}