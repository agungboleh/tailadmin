"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useEffect, useMemo, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface SplineAreaChartsProps {
  categories: string[];
  first_data: number[];
  second_data: number[];
}

export default function SplineAreaCharts({
  categories,
  first_data,
  second_data,
}: SplineAreaChartsProps) {
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
      data: first_data,
    },
    {
      name: "Revenue",
      data: second_data,
    },
  ], [first_data, second_data]);

  const options: ApexOptions = useMemo(() => ({
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#1447e6", "#8ec5ff"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    stroke: {
      curve: "straight",
      width: [2, 2],
    },

    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0,
      strokeColors: "#ffffff",
      strokeWidth: 2,
      hover: {
        size: 6,
      },
    },
    grid: {
      borderColor: isDark ? "#4a5565" : "#e5e7eb",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: isDark ? "dark" : "light",
      enabled: true,
      x: {
        format: "dd MMM yyyy",
      },
    },
    xaxis: {
      type: "category",
      categories: categories,
      labels: {
        style: {
          colors: isDark ? "#ffffff" : "#364153",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: isDark ? "#ffffff" : "#364153",
        },
      },
    },
  }), [categories, isDark]);


  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
      <div className="-ml-5 min-w-162.5 xl:min-w-full pl-2">
        <Chart options={options} series={series} type="area" height={310} width="100%" />
      </div>
    </div>
  );
}