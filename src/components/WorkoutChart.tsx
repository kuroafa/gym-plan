import React, { useState, useEffect } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart, Title, Tooltip, Legend, ArcElement } from 'chart.js';

Chart.register(Title, Tooltip, Legend, ArcElement);

type Props = {};

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[]; // Use an array of colors for each data point
  }[];
}

const WorkoutChart = (props: Props) => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Workout's", "Day's"],
      
      datasets: [
        {
          label: "Hours",
          data: [  6, 8],
          backgroundColor: [ "gray",  "black",],
          
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Workouts",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className="h-80  p-2 relative ">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default WorkoutChart;
