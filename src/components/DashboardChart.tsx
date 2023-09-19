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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {};

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const DashboardChart = (props: Props) => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      
      datasets: [
        {
          label: "Hours",
          data: [2, 3, 5, 2,4, 6, 8],
          borderColor: "white",
          backgroundColor: "#84cc16",
          
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
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust the opacity as needed (0.5 is semi-transparent)
    zIndex: 1, // Place the overlay above the background image
  
  };

  return (
    <>
      <div className=" relative rounded-xl shadow-2xl shadow-black">
      <div className="rounded-xl" style={overlayStyle}></div>
        <div className="z-[200] h-60 p-2">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </>
  );
};

export default DashboardChart;
