import SplineAreaCharts from "../../charts/SplineAreaCharts";
import RangeCalendar from "../../date-time-picker/RangeCalendar";
import TimePeriodTab from "../../tabs/TimePeriodTab";

export default function CardsChartType3() {
    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex flex-col xl:flex-row justify-between mb-4 gap-4">
                <div>
                    <p className="font-semibold text-lg text-gray-700 dark:text-gray-200">Statistics</p>
                    <p className="text-sm text-gray-500">Target you've set for each month</p>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row items-start sm:items-center sm:justify-between xl:gap-4">
                    <TimePeriodTab />
                    <RangeCalendar />
                </div>
            </div>
            <div className="relative w-full">
                <SplineAreaCharts
                    categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                    first_data={[180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235]}
                    second_data={[40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140]}
                />
            </div>
        </div>
    )
}