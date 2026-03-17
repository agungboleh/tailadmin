import ActionButton from "../../buttons/Action";
import RadialBarChart from "../../charts/RadialBarChart";
import TrendBadge from "../../ui/badge/TrendBadge";
import StatsTrend from "../../ui/stats/StatsTrend";

export type TrendType =
    | "up"
    | "down"
    | "plus"
    | "minus";

interface CardsProps {
    title: string,
    caption?: string,
    content: string,
}

interface TrendProps {
    percentage: string,
    trendtype: TrendType;
}

interface ChartRadialBarProps {
    value: number[]
}

export type TrendDirection =
    | "up"
    | "down";

type StatItem = {
    label: string;
    value: string;
    trend: TrendDirection;
};

interface StatsProps {
    items: StatItem[];
}

type Props = CardsProps & TrendProps & ChartRadialBarProps & StatsProps

export default function CardsChartRadialBar({ title, caption, content, percentage, trendtype, value, items }: Props) {
    return (
        <div className="rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-white/3">
            <div className="rounded-xl p-6 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
                <div className="flex justify-between">
                    <p className="font-semibold text-lg">{title}</p>
                    <ActionButton />
                </div>
                <p className="text-sm text-gray-500">{caption}</p>
                <div className="relative">
                    <RadialBarChart data={value} />
                    <TrendBadge trend={trendtype} variant="light" className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-[95%] rounded-full px-3 py-1 text-xs font-medium">{percentage}</TrendBadge>
                </div>
                <p className="mx-auto mt-10 w-full max-w-95 text-center text-sm text-gray-500 sm:text-base">
                    {content}
                </p>
            </div>
            <StatsTrend items={items} />
        </div>
    )
}