"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";


const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

interface StackedColumnsChartProps {
    series: {
        name: string;
        data: number[];
    }[];
    categories: string[];
}

export default function StackedColumnsChart({ series, categories }: StackedColumnsChartProps) {
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

    const options: ApexOptions = {
        chart: {
            type: "bar",
            stacked: true,
            toolbar: {
                show: false,
            },
            background: "transparent",
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
                columnWidth: "40%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: categories,
            labels: {
                style: { colors: "#6b7280" },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: { show: false }
        },
        legend: {
            fontSize: "14px",
            position: "top",
            horizontalAlign: "left",
            markers: {
                shape: "circle",
                size: 5,
                offsetX: -5,
            },
            labels: {
                colors: "#6b7280",
            },
        },
        colors: [
            "#2a31d8", // Direct
            "#465fff", // Referral
            "#7592ff", // Organic
            "#c2d6ff", // Social
        ],
        fill: {
            opacity: 1,
        },
        grid: {
            borderColor: isDark ? "#364153" : "#e5e7eb",
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#6b7280",
                },
            },
        },
        tooltip: {
            shared: false,
            intersect: true,
            x: {
                show: false,
            },
        },
    };

    return (
        <div className="my-5 min-h-38.75 rounded-xl">
            <div className="h-full">
                <Chart options={options} series={series} type="bar" height={290} />
            </div>
        </div>
    );
}