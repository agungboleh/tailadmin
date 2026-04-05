import TrendBadge from "../../ui/badge/TrendBadge";

export type TrendType =
    | "up"
    | "down"
    | "plus"
    | "minus";

interface HeaderRightContentProps {
    value: string;
    percentage: string;
    TrendType: TrendType;
    label: string;
}

export default function HeaderRightContent({ value, percentage, TrendType, label }: HeaderRightContentProps) {
    return (
        <div className="min-w-0">
            <div className="inline-flex items-center gap-2">
                <p className="font-bold text-2xl text-gray-700 dark:text-gray-200">
                    {value}
                </p>
                <TrendBadge trend={TrendType} variant="light" className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium">{percentage}</TrendBadge>
            </div>
            {label && (
                <p className="text-xs text-gray-500 mt-1">
                    {label}
                </p>
            )}
        </div>
    );
}