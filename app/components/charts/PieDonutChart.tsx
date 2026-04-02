"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

interface PieDonutChartProps {
    series: number[];
    label: string[];
}

export default function StackedColumnsChart({ series, label }: PieDonutChartProps) {

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
            type: "donut",
        },
        labels: label,
        colors: ["#3B42D6", "#6C8CF5", "#C7D2FE"],
        legend: {
            position: "bottom",
            labels: {
                colors: isDark ? "#e5e7eb" : "#364153",
            },
            horizontalAlign: "center",
            fontSize: "14px",
            markers: {
                shape: "circle",
                size: 5,
                offsetX: -5,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "65%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontWeight: "bold",
                            color: isDark ? "#e5e7eb" : "#364153",
                        },
                        value: {
                            show: true,
                            offsetY: 0,
                            fontWeight: "light",
                            color: isDark ? "#e5e7eb" : "#364153",
                        },
                        total: {
                            show: false,
                        },
                    },

                },

            },
        },
        states: {
            hover: { filter: { type: "none" } },
        },
        tooltip: {
            enabled: false,
        },
    };

    return (
        <div className="my-5 min-h-38.75 rounded-xl">
            <div className="h-full">
                <Chart options={options} series={series} type="donut" height={300} />
            </div>
        </div>
    );
}