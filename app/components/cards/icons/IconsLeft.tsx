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
}

export default function CardsIconLeft({ icon, title, value, percentage, TrendType }: CardsIconleftProps) {

    return (
        <div className="border rounded-xl p-6 border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
            <div className="flex justify-start">
                <div className="flex items-center justify-center bg-gray-100 dark:bg-white/5 p-3.5 rounded-xl">{icon}</div>
            </div>
            <div className="flex items-end justify-between mt-5">
                <div className="flex flex-col text-sm">{title}<span className="text-2xl font-bold">{value}</span></div>
                <TrendBadge trend={TrendType} variant="light" className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium">{percentage}</TrendBadge>
            </div>
        </div>
    );
}