import SplineAreaCharts from "../../charts/SplineAreaCharts";
import RangeCalendar from "../../date-time-picker/RangeCalendar";
import TimePeriodTab from "../../tabs/TimePeriodTab";

interface ChartSplineAreaProps {
    title: string
    caption: string
}

interface SplineAreaChartsProps {
    categories: string[];
    first_data: number[];
    second_data: number[];
}

type Props = ChartSplineAreaProps & SplineAreaChartsProps

export default function CardsChartSplineArea({ title, caption, categories, first_data, second_data }: Props) {
    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex flex-col xl:flex-row justify-between mb-4 gap-4">
                <div>
                    <p className="font-semibold text-lg text-gray-700 dark:text-gray-200">{title}</p>
                    <p className="text-sm text-gray-500">{caption}</p>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row items-start sm:items-center sm:justify-between xl:gap-4">
                    <TimePeriodTab />
                    <RangeCalendar />
                </div>
            </div>
            <div className="relative w-full">
                <SplineAreaCharts categories={categories} first_data={first_data} second_data={second_data} />
            </div>
        </div>
    )
}