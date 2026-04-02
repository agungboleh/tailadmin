import PieDonutChart from "../../charts/PieDonutChart";

interface ChartPieDonutProps {
    header: React.ReactNode;
    series: number[];
    label: string[];
}

export default function ChartPieDonut({ header, series, label }: ChartPieDonutProps) {
    return (
        <div className="border rounded-xl px-6 pt-6 border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
            {header}
            <div className="relative w-full">
                <PieDonutChart series={series} label={label} />
            </div>
        </div>
    )
}