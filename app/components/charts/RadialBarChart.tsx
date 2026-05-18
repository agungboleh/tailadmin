"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useEffect, useMemo, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface RadialBarChartProps {
  data: number[];
  prefix?: string;
  suffix?: string; 
}

export default function RadialBarChart({ data, prefix = "", 
  suffix = "", }: RadialBarChartProps) {
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

  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "radialBar",
        height: 330,
        sparkline: {
          enabled: true,
        },
        background: "transparent",
      },
      plotOptions: {
        radialBar: {
          startAngle: -85,
          endAngle: 85,
          hollow: {
            size: "80%",
          },
          track: {
            background: isDark ? "#344054" : "#E4E7EC",
            strokeWidth: "100%",
            margin: 5,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: "36px",
              fontWeight: "600",
              offsetY: -40,
              color: isDark ? "#FFFFFF" : "#1D2939",
              formatter: (val: number) =>
              `${prefix ?? ""}${val}${suffix ?? ""}`,
            },
          },
        },
      },
      fill: {
        type: "solid",
        colors: ["#465FFF"],
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Progress"],
      theme: {
        mode: isDark ? "dark" : "light",
      },
    }),
    [isDark, prefix, suffix]
  );

  return (
    <div className="w-full">
      <Chart options={options} series={data} type="radialBar" height={330} />
    </div>
  );
}
