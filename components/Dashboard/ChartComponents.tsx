"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const ChartComponents = () => {
  return (
    <Bar
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            border: {
              display: false,
            },
            grid: {
              display: false,
              //   drawOnChartArea: CHART_AREA,
              //   drawTicks: TICKS,
            },
          },
          y: {
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Meetings",
          },
        },
      }}
      data={{
        labels,
        datasets: [
          {
            label: "Successfull",
            data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
            backgroundColor: "#0072F5",
          },
          {
            label: "Pending",
            data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
            backgroundColor: "#F5A524",
          },
          {
            label: "Failed",
            data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
            backgroundColor: "#F31260",
          },
        ],
      }}
    />
  );
};

export default ChartComponents;
