"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface LineChartProps {
  categories: string[];
  data: number[];
}

export default function LineChart({
  categories,
  data,
}: LineChartProps) {
  const series = [
    {
      name: "Revenue",
      data: data,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#e5e7eb",
    },
    xaxis: {
      categories: categories,
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
      },
    },
    colors: ["#3b82f6"],
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
      <Chart options={options} series={series} type="area" height={300} />
    </div>
  );
}
