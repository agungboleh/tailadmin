import SplineAreaChart from "../../charts/SplineAreaChart";

interface ChartSplineAreaProps {
    header: React.ReactNode;
}

interface SplineAreaChartsProps {
    categories: string[];
    first_data: number[];
    second_data: number[];
}

type Props = ChartSplineAreaProps & SplineAreaChartsProps

export default function CardsChartSplineArea({ header, categories, first_data, second_data }: Props) {
    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-gray-700 dark:text-gray-200">
            {header}
            <div className="relative w-full">
                <SplineAreaChart categories={categories} first_data={first_data} second_data={second_data} />
            </div>
        </div>
    )
}