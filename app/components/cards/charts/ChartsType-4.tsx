import BarChart from "../../charts/BarChart";
import TimePeriodTab from "../../tabs/TimePeriodTab";

export default function CardsChartType4() {
    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex flex-col lg:flex-row justify-between mb-4 gap-4">
                <div>
                    <p className="font-semibold text-lg text-gray-700 dark:text-gray-200">Analytics</p>
                    <p className="text-sm text-gray-500">Visitor analytics of last 30 days</p>
                </div>
                <div>
                    <TimePeriodTab />
                </div>
            </div>
            <div className="relative w-full">
                <BarChart height={320} categories={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]} data={[168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123, 212, 270, 190, 310, 115, 90, 380, 112, 223, 292, 170, 290, 110, 115, 290, 380, 312]} />
            </div>
        </div>
    )
}