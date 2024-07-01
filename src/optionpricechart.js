import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
const OptionPriceChart = ({ optionPrices }) => {
  const { callPrices, putPrices } = optionPrices;

  const chartData = {
    labels: Array.from({ length: callPrices.length }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Call Option Price',
        data: callPrices,
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Put Option Price',
        data: putPrices,
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Line data={chartData} />
    </div>
  );
};

export default OptionPriceChart;
