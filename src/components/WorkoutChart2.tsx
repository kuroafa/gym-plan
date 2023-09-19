import React, { useState, useEffect } from "react";
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const WorkoutChart2 = (props: Props) => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    // Sample data (replace with your actual data)
    const dataset1Data = [100, 140, 220, 430, 327, 489, 933];
    const dataset2Data = [240, 345, 310, 570, 280, 140, 500];

    const [chartData, setChartData] = useState<ChartData>({
        labels,
        datasets: [
            {
                label: 'Day',
                data: dataset1Data,
                borderColor: 'red',
                backgroundColor: 'red',
            },
            {
                label: 'Workout',
                data: dataset2Data,
                borderColor: 'green',
                backgroundColor: 'green',
            },
        ],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartOptions({
            responsive: true, // Make the chart responsive
            maintainAspectRatio: false, // Disable the default aspect ratio
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Workout',
                },
            },
        });
    }, []);

    return (
        <>
            <div className="h-[300px] md:h-[300px] w-full p-2">
                <Line data={chartData} options={chartOptions} />
            </div>
        </>
    );
};

export default WorkoutChart2;
