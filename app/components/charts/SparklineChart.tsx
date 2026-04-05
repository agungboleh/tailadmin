"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});


export default function SparklineChart() {
    const series = [
        {
            name: "Items",
            data: [10, 12, 11, 13, 10, 8, 10, 9, 10, 9],
        },
    ];

    const options: ApexCharts.ApexOptions = {
        chart: {
            type: "area",
            sparkline: {
                enabled: true,
            },
            zoom: { enabled: true },
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        colors: ["#22c55e"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "vertical",
                opacityFrom: 0.55,
                opacityTo: 0,
                stops: [0, 100],
            },
        },
        tooltip: {
            enabled: false,
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
    };

    return (
        <div className="w-full xl:w-24 h-16">
            <Chart options={options} series={series} type="area" height={60} />
        </div>
    );
}