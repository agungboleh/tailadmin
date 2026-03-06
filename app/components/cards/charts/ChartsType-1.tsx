import ActionButton from "../../buttons/Action";
import BarChart from "../../charts/BarChart";

export default function CardsChartType1() {
    return (
        <div className="border rounded-xl px-6 pt-6 border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
            <div className="flex justify-between">
                <p className="font-semibold text-lg">Monthly Sales</p>
                <ActionButton />
            </div>
            <div className="relative w-full">
                <BarChart categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]} data={[168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112]} />
            </div>
        </div>
    )
}