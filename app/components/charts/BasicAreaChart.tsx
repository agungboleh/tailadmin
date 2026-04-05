"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useEffect, useMemo, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface BasicAreaChartProps {
  categories: string[];
  data: number[];
  height?: number;
}

export default function BasicAreaChart({
  categories,
  data,
  height = 140,
}: BasicAreaChartProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const series = useMemo(() => [
    {
      name: "Sales",
      data: data,
    },
  ], [data]);

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 140,
      sparkline: {
        enabled: true,
      },
      toolbar: { show: false },
      background: "transparent",
      zoom: { enabled: true },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    colors: ["#465fff"],
    grid: {
      show: false,
    },
    xaxis: {
      categories,
      labels: { show: false },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: isDark ? "dark" : "light",
    },
  };

  return (
    <div className="my-5 min-h-38.75 rounded-xl bg-gray-50 dark:bg-gray-900">
      <div className="h-full">
        <Chart options={options} series={series} type="area" height={height} width="100%" />
      </div>
    </div>
  );
}