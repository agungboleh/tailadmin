const trendConfig = {
    up: { icon: "+", className: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400", },
    down: { icon: "-", className: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400", },
};

type Trend = "up" | "down";

interface CardsBasicPercentProps {
    title: string;
    value: string;
    percentage: string;
    trend: Trend;
    caption: string;
}

export default function CardsBasicPercent({ title, value, percentage, trend, caption }: CardsBasicPercentProps) {
    const { icon: trendIcon, className } = trendConfig[trend];
    return (
        <div className="border rounded-xl p-6 border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-500 dark:text-gray-400">
            <div className="text-sm">{title}</div>
            <div className="flex flex-row justify-between items-center gap-1">
                <div className="text-2xl font-bold text-gray-700 dark:text-white">{value}</div>
                <div className={`flex items-center p-2 rounded-full text-sm ${className}`}>{trendIcon}<span className="pl-1">{percentage}</span></div>
            </div>
            <div className="text-xs">{caption}</div>
        </div>
    );
}