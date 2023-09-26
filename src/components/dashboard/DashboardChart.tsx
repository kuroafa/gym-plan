'use client'
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Trainer } from "@prisma/client";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  trainerData: Trainer[];
};

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const DashboardChart = ({ trainerData }: Props) => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (trainerData && trainerData.length > 0) {
      // Preprocess the trainerData to extract workoutDuration and date
      const dates: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const workoutCounts: number[] = [0, 0, 0, 0, 0, 0, 0];

      trainerData.forEach((entry) => {
        const date = new Date(entry.date);
        let dayOfWeek = date.getDay() - 1; // Adjust to start from Monday (0 for Monday, 1 for Tuesday, etc.)
        if (dayOfWeek === -1) {
          dayOfWeek = 6; // Adjust Sunday (0) to be 6 (last day of the week)
        }
        workoutCounts[dayOfWeek]++;
      });

      // Update chart data and options
      setChartData({
        labels: dates,
        datasets: [
          {
            label: "Workout Count",
            data: workoutCounts,
            borderColor: "white",
            backgroundColor: "#94a3b8",
          },
        ],
      });

      setChartOptions({
        plugins: {
          legend: {
            position: "top",
          },
         
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Workout Count",
              font: {
                weight: 'bold',
              },
            },
            suggestedMin: 0,
            suggestedMax: 10, 
          },
          x: {
            title: {
              display: true,
             
            },
          },
        },
      });
    }
  }, [trainerData]);

  return (
    <>
      <div className="">
        <div className="rounded-xl h-[250px]">
          <Bar data={chartData} options={chartOptions} />
        </div>
       
      </div>
    </>
  );
};

export default DashboardChart;
