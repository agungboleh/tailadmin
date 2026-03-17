import ActionButton from "../../buttons/Action";
import BarChart from "../../charts/BarChart";

interface CardsChartBarProps {
    title: string;
    categories: string[];
    data: number[];
    heightchart: number;
}

export default function CardsChartBar({ title, categories, data, heightchart }: CardsChartBarProps) {
    return (
        <div className="border rounded-xl px-6 pt-6 border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
            <div className="flex justify-between">
                <p className="font-semibold text-lg">{title}</p>
                <ActionButton />
            </div>
            <div className="relative w-full">
                <BarChart categories={categories} data={data} height={heightchart} />
            </div>
        </div>
    )
}