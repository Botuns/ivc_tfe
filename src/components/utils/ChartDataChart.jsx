import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  } from 'chart.js';

  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip)

const ChartDataChart = ({ participants, atfal }) => {
    
  const data = {
    labels: ['Participants', 'Atfal Registered'],
    datasets: [
      {
        label: 'Analytics of People Registered',
        data: [participants, atfal],
        backgroundColor: [
            'rgba(52, 211, 153, 0.9)', // Green color for Participants
            'rgba(52, 211, 153, 0.9)', // Green color for Participants
        ],
        
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    indexAxis: 'x',
    barPercentage: 0.5, 
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg h-[5cm] mt-[1cm]">
      <h2 className="text-xl font-semibold mb-4">Chart - Number of Participants and Atfal Registered</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartDataChart;
