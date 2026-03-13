"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useEffect, useMemo, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface BarChartProps {
  categories: string[];
  data: number[];
  height?: number;
}

export default function BarChart({
  categories,
  data,
  height = 300,
}: BarChartProps) {
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

  const series = [
    {
      name: "Sales",
      data: data,
    },
  ];

  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "bar",
        toolbar: { show: false },
        background: "transparent",
      },

      theme: {
        mode: isDark ? "dark" : "light",
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "39%",
          borderRadius: 6,
          borderRadiusApplication: 'end',
        },
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        borderColor: isDark ? "#364153" : "#e5e7eb",
      },

      xaxis: {
        categories: categories,
        axisTicks: { show: false },
        axisBorder: {
          color: isDark ? "#364153" : "#e5e7eb",
        },
        labels: {
          style: {
            colors: isDark ? "#e5e7eb" : "#364153",
          },
        },
      },

      yaxis: {
        labels: {
          style: {
            colors: isDark ? "#e5e7eb" : "#364153",
          },
        },
      },

      tooltip: {
        theme: isDark ? "dark" : "light",
        x: { show: false },
        y: {
          formatter: (val: number) => `${val}`,
        },
      },

      colors: ["#465fff"],
    }),
    [isDark, categories]
  );

  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
      <div className="-ml-5 min-w-162.5 xl:min-w-full pl-2">
        <Chart options={options} series={series} type="bar" height={height} width="100%" />
      </div>
    </div>
  );
}