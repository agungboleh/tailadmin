import TrendBadge from "../../ui/badge/TrendBadge";

export type TrendType =
    | "up"
    | "down"
    | "plus"
    | "minus";

interface CardsIconleftProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    percentage: string;
    TrendType: TrendType;
    caption: string;
}

export default function CardsIconLeft_2({ icon, title, value, percentage, TrendType, caption }: CardsIconleftProps) {

    return (
        <div className="border rounded-xl p-6 border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
            <div className="flex justify-start">
                <div className="flex items-center justify-center bg-gray-100 dark:bg-white/5 p-3.5 rounded-xl">{icon}</div>
            </div>
            <div className="text-gray-500 dark:text-gray-400 pt-6 pb-2 text-sm">
                {title}
            </div>
            <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">{value}</div>
                <div className="flex gap-2">
                    <TrendBadge trend={TrendType} variant="light" className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium">{percentage}</TrendBadge>
                    {caption && <span className="block text-xs text-gray-400 dark:text-gray-400 mt-1">{caption}</span>}
                </div>
            </div>
        </div>
    );
}