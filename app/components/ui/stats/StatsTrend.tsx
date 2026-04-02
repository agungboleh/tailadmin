import { BsArrowUp, BsArrowDown } from "react-icons/bs";

type TrendDirection = "up" | "down";

interface StatsItem {
    label: string;
    value: string;
    trend: TrendDirection;
}

interface StatsTrendProps {
    items: StatsItem[];
}

const trendIcons = {
    up: <BsArrowUp size={16} className="text-green-500" />,
    down: <BsArrowDown size={16} className="text-red-500" />,
};

export default function StatsTrend({ items }: StatsTrendProps) {
    return (
        <div className="flex items-center justify-center gap-5 px-6 py-3 sm:gap-8 sm:py-6">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-5 sm:gap-8">
                    <div>
                        <p className="mb-1 text-center text-gray-500 text-xs dark:text-gray-400 sm:text-sm">
                            {item.label}
                        </p>
                        <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                            {item.value}
                            {trendIcons[item.trend]}
                        </p>
                    </div>
                    {index < items.length - 1 && (
                        <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>
                    )}
                </div>
            ))}
        </div>
    );
};