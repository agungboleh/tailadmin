import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const trendConfig = {
    up: { icon: <BsArrowUpShort size={20} />, className: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400", },
    down: { icon: <BsArrowDownShort size={20} />, className: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400", },
};

type Trend = "up" | "down";

interface CardsIconType1Props {
    icon: React.ReactNode;
    title: string;
    value: string;
    percentage: string;
    trend: Trend;
}

export default function CardsIconType1({ icon, title, value, percentage, trend, }: CardsIconType1Props) {

    const { icon: trendIcon, className } = trendConfig[trend];

    return (
        <div className="border rounded-xl p-6 border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
            <div className="flex justify-start">
                <div className="flex items-center justify-center bg-gray-100 dark:bg-white/5 p-3.5 rounded-xl">{icon}</div>
            </div>
            <div className="flex items-end justify-between mt-5">
                <div className="flex flex-col text-sm">{title}<span className="text-2xl font-bold">{value}</span></div>
                <div className={`flex items-center px-2.5 py-1 rounded-full text-sm ${className}`}>{trendIcon}{percentage}
                </div>
            </div>
        </div>
    );
}